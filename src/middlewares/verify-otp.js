import { saveOTP } from "./save-otp.js";
export const verifyOTPCode = (phoneNumber, otpCode, environment) => {
  const storedOTP = saveOTP.get(phoneNumber);
  if (!storedOTP || Number(storedOTP.otp) !== Number(otpCode)) {
    environment === "development" &&
      console.error("Failed! Incorrect OTP code");
    return false;
  }
  if (Date.now() > storedOTP.expiresAt) {
    environment === "development" && console.log("OTP code has expired");
    saveOTP.delete(phoneNumber);
    return false;
  }
  saveOTP.delete(phoneNumber);
  environment === "development" && console.log("OTP verified!");
  return true;
};
