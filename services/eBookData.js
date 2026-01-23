import crypto from 'crypto';
import { getDBPoolData } from '../mysql/mySQLClient.js';
import { createUUID } from '../helpers/uuid';

const privateKey = process.env.PAYMENT_PRIVATE_KEY;
const publicKey = process.env.PAYMENT_PUBLIC_KEY;

export async function getPaymentFormInitParams(purchasedItemId = 1) {
  const orderDate = new Date().toLocaleString();

  const { orderId, resultPageId } = await initNextOrderData(purchasedItemId);

  const rawData = {
    version: 3,
    action: 'pay',
    amount: '5',
    currency: 'UAH',
    description: `payment for e-book, order ${orderId}_${orderDate}`,
    order_id: `${orderId}_${orderDate}`,
    result_url: `http://127.0.0.1:3000/result/${resultPageId}`,
  };

  const { data, signature } = getPaymentFormParams(rawData);

  return {
    data,
    signature,
    orderId,
    resultPageId,
  };
}

export function getPaymentFormParams(rawData) {
  const rawDataWithCreds = {
    ...rawData,
    public_key: publicKey,
  };

  const base64Data = Buffer.from(JSON.stringify(rawDataWithCreds)).toString('base64');

  const base64allTogether = `${privateKey}${base64Data}${privateKey}`;

  const sha1Hash = crypto.createHash('sha1');
  const signature = sha1Hash.update(base64allTogether).digest('base64');

  return {
    data: base64Data,
    signature,
  };
}

async function initNextOrderData(purchasedItemId) {
  const resultPageId = createUUID();
  // const resultUrl = randomPart + "_" + userEmail + "_" + purchasedItemId;
  // const resultPageId = crypto
  //   .createHmac("sha256", privateKey)
  //   .update(resultUrl)
  //   .digest("hex");

  // console.log("resultPageId", resultPageId);

  const updateOrderState = `CALL updateOrderState('${purchasedItemId}', '${resultPageId}', 0, '')`;

  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(updateOrderState, (err, rows) => {
      if (err) {
        console.log('updateOrderState ERROR', err);
        reject({
          data: [],
        });
      }

      try {
        const orderId = rows[0][0]['LAST_INSERT_ID()'];

        resolve({
          orderId: orderId,
          resultPageId,
        });
      } catch (e) {
        console.log('error', e);
        reject({
          data: [],
        });
      }
    });
  });
}
