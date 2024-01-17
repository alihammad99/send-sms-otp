import { verifyOTPCode } from "../middlewares/verify-otp.js";
export const verifyOTP = (
  phoneNumber,
  otpCode,
  env = process.env.NODE_ENV || "development"
) => verifyOTPCode(phoneNumber, otpCode, env);
