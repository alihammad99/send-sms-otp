import { verifyOTPCode } from "../middlewares/verify-otp.js";
export const verifyOTP = (phoneNumber, otpCode, environment = "development") =>
  verifyOTPCode(phoneNumber, otpCode, environment);
