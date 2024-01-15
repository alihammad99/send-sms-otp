import axios from "axios";
export const sendSMS = async (options) => {
  const {
    token: token,
    phoneNumber: phoneNumber,
    message: message,
    sender: sender,
    otp: otp,
  } = options;
  const data = JSON.stringify({
    messages: [
      {
        channel: "sms",
        recipients: [phoneNumber],
        content: `${message || ""} ${
          otp !== 0 ? "Your OTP code is: " + otp : ""
        }`,
        msg_type: "text",
        data_coding: "text",
      },
    ],
    message_globals: {
      originator: sender || "Produx",
      report_url: "https://the_url_to_recieve_delivery_report.com",
    },
  });
  const config = {
    method: "post",
    url: "https://api.d7networks.com/messages/v1/send",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  const send = await axios(config);
  return send;
};