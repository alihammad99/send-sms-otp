# send-sms-otp

A simple package to streamline the process of sending SMS messages and managing OTP (One-Time Password) functionality. This package utilizes D7 Networks, so you'll need a valid token for authentication.

If `otpLength` is not included, the OTP code process will be ignored. However, you can still generate OTP codes by just providing the length, and it will be generated, saved, and managed automatically. The OTP code is saved in temporary memory for seamless verification.

## Features

- `SMS Messaging`: Effortlessly send SMS messages with customizable content.
- `OTP Generation and Verification`: Generate OTP codes and verify them hassle-free.
- `Automatic Management`: OTP codes are automatically generated, saved, and managed when otpLength is specified.
- `D7Networks Integration`: Utilizes [D7Networks](https://d7networks.com/) for secure and reliable communication.
- `Easy Integration`: The package offers an easy-to-use interface, ensuring a smooth and quick setup within your.

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
  expiresIn: 5,
  environment: "development",
});

// Verifying OTP
verifyOTP("+964123456789", "1234", "development");
```

## API

### sendMessage(options)

Sends an SMS message to the specified phone number.

| Option        | Description                                 | Type   | Default       | Example                 | Required |
| ------------- | ------------------------------------------- | ------ | ------------- | ----------------------- | -------- |
| `token`       | [D7Networks](https://d7networks.com/) token | string | -             | "your-d7networks-token" | Yes      |
| `phoneNumber` | Receiver's mobile number                    | string | -             | "+964123456789"         | Yes      |
| `otpLength`   | Length of OTP code digits                   | number | 0             | 4                       | No       |
| `message`     | Message to be sent                          | string | null          | "Hello world!"          | No       |
| `expiresIn`   | OTP code lifetime in minutes                | number | 10            | 5                       | No       |
| `environment` | Coding environment for logs comments        | string | "development" | "production"            | No       |

Feel free to copy and paste this table into your README file, and adjust formatting if needed.

### verifyOTP(phoneNumber, otpCode, environment)

Verifies the provided OTP code for the given phone number.

| Option        | Description                             | Type   | Example         | Required |
| ------------- | --------------------------------------- | ------ | --------------- | -------- |
| `phoneNumber` | Receiver's mobile number                | string | "+964123456789" | Yes      |
| `otpCode`     | OTP code to be verified                 | string | "1234"          | Yes      |
| `environment` | Coding environment for logs information | string | "development"   | No       |

Feel free to contribute and report issues on [GitHub](https://github.com/alihammad99/send-sms-otp).

## Support

If you find this package helpful, consider buying me a coffee!

<div style="text-align: left;">
  <a href="https://www.buymeacoffee.com/alihammad" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50">
  </a>
</div>

