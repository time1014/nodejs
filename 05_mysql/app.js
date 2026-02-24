const express = require('express');

require('dotenv').config();
const mysql = require('./index');
const encrypto = require('./crypto');
const nodemailer = require("./nodemailer");
const app = express();
const path = require('path');
const cors = require('cors');

//body parser
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//전체 목록조회
app.get('/api/customer', async (req, res) => {
  const result = await mysql.query('customerList')
  console.log(result);

  //결과응답
  res.json(result);
});

//등록
app.post('/api/customer', async (req, res) => {
  const { name, email, phone, passwd } = req.body;
  const hassPasswd = encrypto.createPassword(passwd);
  const result = await mysql.query('customerInsert', { name, email, phone, passwd: hassPasswd })
  res.json(result);
});

//수정
app.put('/api/customer', async (req, res) => {
  const { name, email, phone, id } = req.body;
  const result = await mysql.query('customerUpdate', [{ name, email, phone }, id]);
  res.json(result);
});

//삭제
app.delete('/api/customer/:id', async (req, res) => {
  const { id } = req.params;
  const result = await mysql.query('customerDelete', [id]);
  res.json(result);
})

//조회 / 로그인  id = email  , 
app.post('/api/login', async (req, res) => {
  //조회 email 기준조회
  const { email, passwd } = req.body;
  const result = await mysql.query('customerSelect', [email]); //[{passwd}]로 그냥 담아서 써도 됨
  const hassPasswd = encrypto.checkPassword(passwd, result[0].passwd);
  if (hassPasswd == true) {
    res.json({success:true})
  } else {
    res.json({success:false})
  }

})

//메일발송
app.post('/api/mail', async (req, res) => {
  const { from, to, subject, text } = req.body;

  const html = text.split("\n").map((elem) => `<p>${elem}</p>`).join(""); // 메일은 html 형식이다 text형태로 할시 줄바꿈이 안됨 그래서 줄바꿈 기준으로 나눠서 p태그안에 넣고 빈문자열로 나눠 문자열로 변환
  const result = await nodemailer.send({ from, to, subject, html });
  res.json(result);
})

app.listen(3000, () => {
  console.log('서버실행중...');
})