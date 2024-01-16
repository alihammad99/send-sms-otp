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
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const send = await response.json();
    return send;
  } catch (error) {
    // Handle errors here
    console.error("Error sending SMS:", error);
    throw error;
  }
};
