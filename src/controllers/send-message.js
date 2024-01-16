import { generateOTP } from "../middlewares/generate-otp.js";
import { sendSMS } from "../middlewares/send-sms.js";
export const sendMessage = async (data) => {
  const {
    phoneNumber: phoneNumber,
    otpLength: otpLength,
    expiresIn: expiresIn,
  } = data;
  const environment = data.environment || "development";
  let otp = 0;
  if (otpLength > 0 && otpLength < 13) {
    otp = generateOTP(phoneNumber, otpLength, expiresIn || 30);
  } else {
    environment === "development" &&
      console.error("Error: OTP length must be between 1 and 12");
  }
  const options = { ...data, otp: otp };
  const sent = await sendSMS(options);
  const success = sent.status === "accepted";
  if (environment === "development") {
    if (success) {
      console.log("Message Sent!");
      console.log("OTP code: ", otp);
    } else {
      console.error("Failed to send message!");
    }
  }
  return success;
};
