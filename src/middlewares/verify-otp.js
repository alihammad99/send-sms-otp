import Log from "../utils/error.js";
import { saveOTP } from "./save-otp.js";
export const verifyOTPCode = (phoneNumber, otpCode, environment) => {
  const storedOTP = saveOTP.get(phoneNumber);
  if (!storedOTP || Number(storedOTP.otp) !== Number(otpCode)) {
    Log("Failed! Incorrect OTP code", environment, "error");
    return false;
  }
  if (Date.now() > storedOTP.expiresAt) {
    Log("OTP code has expired", environment, "warn");
    saveOTP.delete(phoneNumber);
    return false;
  }
  saveOTP.delete(phoneNumber);
  Log("OTP verified!", environment);

  return true;
};
