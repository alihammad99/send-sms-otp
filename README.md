# send-sms-otp

A simple package to streamline the process of sending SMS messages and managing OTP (One-Time Password) functionality. This package utilizes D7 Networks, so you'll need a valid token for authentication.

## Installation

```bash
npm install send-sms-otp
```

## Usage

```javascript
import { sendMessage, verifyOTP } from "send-sms-otp";

// Sending SMS
sendMessage({
  token: "your-d7networks-token",
  phoneNumber: "+964123456789",
  otpLength: 4,
  message: "Hello world!",
  expiresIn: 60,
  environment: "development",
});

// Verifying OTP
verifyOTP("+964123456789", "1234", "development");
```

## API

### sendMessage(options)

Sends an SMS message to the specified phone number.

- `token`: D7 Networks token (string, required)
- `phoneNumber`: Receiver's mobile number (string, required)
- `otpLength`: Length of OTP code digits (number, optional, default: 0, min: 1, max: 12)
- `message`: Message to be sent (string, optional, default: null)
- `expiresIn`: OTP code lifetime in minutes (number, optional, default: 30)
- `environment`: Coding environment for logging (string, optional, default: "development")

### verifyOTP(phoneNumber, otpCode, environment)

Verifies the provided OTP code for the given phone number.

- `phoneNumber`: Receiver's mobile number (string, required)
- `otpCode`: OTP code to be verified (string, required)
- `environment`: Coding environment for logging (string, optional, default: "development")

## Options

- `token`: D7 Networks token (string, required)
- `phoneNumber`: Receiver's mobile number (string, required)
- `otpLength`: Length of OTP code digits (number, optional, default: 0, min: 1, max: 12)
- `message`: Message to be sent (string, optional, default: null)
- `expiresIn`: OTP code lifetime in minutes (number, optional, default: 30)
- `environment`: Coding environment for logging (string, optional, default: "development")

Feel free to contribute and report issues on [GitHub](https://github.com/your-username/send-sms-otp).
