import crypto from "crypto";

const private_key = "sandbox_rj0Fkpmyo5sbLtzetqL8fFLq4diQ4O4ftJwvAuIu";
const public_key = "sandbox_i69559821607";

export function getPaymentFormParams(rawData) {
  const rawDataWithCreds = {
    ...rawData,
    public_key: public_key,
  };

  const base64Data = Buffer.from(JSON.stringify(rawDataWithCreds)).toString(
    "base64"
  );
  const base64allTogether = `${private_key}${base64Data}${private_key}`;

  const sha1Hash = crypto.createHash("sha1");
  const signature = sha1Hash.update(base64allTogether).digest("base64");

  return { data: base64Data, signature };
}
