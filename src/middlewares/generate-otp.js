import{saveOTP}from"./save-otp.js";const hours=60*1e3;export const generateOTP=(phoneNumber,otpLength,expiresIn=30)=>{const otp=Math.floor(Math.pow(10,otpLength-1)+Math.random()*9*Math.pow(10,otpLength-1));const expirationTime=Date.now()+hours*expiresIn;saveOTP.set(phoneNumber,{otp:otp,expiresAt:expirationTime});setTimeout((()=>{otpMap.delete(phoneNumber)}),hours*expiresIn);return otp.toString().padStart(otpLength,"0")};