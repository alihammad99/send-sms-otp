import { saveOTP } from "./save-otp.js";
const minutes = 60 * 1000;
export const generateOTP = (phoneNumber, otpLength, expiresIn = 5) => {
  const otp = Math.floor(
    Math.pow(10, otpLength - 1) +
      Math.random() * 9 * Math.pow(10, otpLength - 1)
  );
  const expirationTime = Date.now() + minutes * expiresIn;
  saveOTP.set(phoneNumber, { otp: otp, expiresAt: expirationTime });
  setTimeout(() => {
    otpMap.delete(phoneNumber);
  }, minutes * expiresIn);
  return otp.toString().padStart(otpLength, "0");
};
