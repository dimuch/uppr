import { getPaymentFormParams } from "./helpers/payment";
import { createUUID } from "./helpers/uuid";

const reqUrl = "https://www.liqpay.ua/api/3/checkout";
// const reqUrl = "https://www.liqpay.ua/api/request";

function HomePage() {
  const rawData = {
    version: 3,
    action: "pay",
    amount: "5",
    currency: "UAH",
    description: "description text",
    order_id: "order_id_1_1_1_1_1_1_1_1_1_1_1_1",
    result_url: `http://127.0.0.1:3000/result/${createUUID()}`
  };

  const { data, signature } = getPaymentFormParams(rawData);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const params = {
      method: "POST",
      body: new URLSearchParams({
        data,
        signature,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const res = await fetch(reqUrl, params);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Hello home</h1>
      <form
        encType="application/x-www-form-urlencoded"
        action="https://www.liqpay.ua/api/3/checkout"
      >
        <input type="hidden" name="data" value={data} />
        <input type="hidden" name="signature" value={signature} />
        <button type="submit">Buy</button>
      </form>
    </>
  );
}

export default HomePage;

// encType = "application/x-www-form-urlencoded";
// action = "https://www.liqpay.ua/api/3/checkout";
