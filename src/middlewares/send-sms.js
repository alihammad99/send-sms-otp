import Log from "../utils/error";

export const sendSMS = async (options) => {
  const { token, phoneNumber, message, sender, otp, environment } = options;

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
  });

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: data,
  };

  try {
    const response = await fetch(
      "https://api.d7networks.com/messages/v1/send",
      config
    );
    if (!response.ok) {
      Log("Invalid D7Networks token!", environment, "error");
    }
    const send = await response.json();
    return send;
  } catch (error) {
    // Handle errors here
    Log(`Error sending SMS: ${error}`, environment, "error");
  }
};
