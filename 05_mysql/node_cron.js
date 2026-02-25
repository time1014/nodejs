const cron = require("node-cron");
const { logger } = require('./winston');
const nodemailer = require("./nodemailer");
require("dotenv").config();

// 주기적으로 실행
cron.schedule("0 50 12 * * *", () => {
  // console.log(Date.now());
  nodemailer.send({
    from: 'koala579@daum.net',
    to: 'whu14777@daum.net',
    subject: "고생 많았다",
    text: "다음에도 바꿀래? ㅋㅋ",
  });
  logger.info("메일 발송");
 });