import { generateOTP } from "../middlewares/generate-otp.js";
import { sendSMS } from "../middlewares/send-sms.js";
import Log from "../utils/error.js";
export const sendMessage = async (data) => {
  const {
    phoneNumber: phoneNumber,
    otpLength: otpLength,
    expiresIn: expiresIn,
  } = data;

  const env = data.environment || process.env.NODE_ENV || "development";

  let otp = 0;
  if (otpLength > 0 && otpLength < 13) {
    otp = generateOTP(phoneNumber, otpLength, expiresIn || 30);
  } else {
    Log("OTP length must be between 1 and 12", env, "error");
  }
  const options = { ...data, env, otp: otp };
  const sent = await sendSMS(options);
  const success = sent.status === "accepted";
  if (success) {
    Log(`Message Sent! OTP code: ${otp}`, env);
  } else {
    Log("Failed to send message!", env, "error");
  }

  return success;
};
