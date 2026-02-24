const nodemailer = require("nodemailer");
require('dotenv').config();

const send = async (data) => {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport(daumConfig) //smtp와 통신할수 있는 객체
    transport.sendMail(data, (err, result) => {
      if (err) {
        console.log(err)
        return reject(err);
      }
      console.log(result);
      resolve(result);
    })
  })
}

    // 2️⃣ 메일 데이터 구성
    const daumConfig = {
      host: "smtp.daum.net",
      port: 465,
      secure: true, // 465는 true
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    }



module.exports = { send };