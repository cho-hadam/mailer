const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const { template } = require("../views/template");

const config = require("../config");
const URL = "https://duzzle.emirim.kr";

// const config = {
//   encryption_key: process.env.ENCRYPTION_KEY,
//   vi: process.env.VI,
//   googlePwd: process.env.GOOGLE_PWD,
// };

// 04.08 / 입력받은 메일 암호화
function encrypt(plainEmail) {
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(config.encryption_key),
    config.vi
  );
  const result =
    cipher.update(plainEmail, "utf8", "base64") + cipher.final("base64");
  return result;
}

router.post("/send/:email", async (req, res) => {
  const smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "DuzzleManager@gmail.com",
      pass: config.googlePwd,
    },
  });

  const { email } = req.params;
  const hash = encrypt(email);
  const link = URL + "/confirmRegister/" + encodeURIComponent(hash);

  const mailOptions = {
    from: "DuzzleManager@gmail.com",
    to: email,
    subject: "Duzzle 회원가입 인증 메일",
    html: template(email, link),
  };

  await smtpTransport.sendMail(mailOptions, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.status(200).send(result);
    }
    smtpTransport.close();
  });
});

module.exports = router;
