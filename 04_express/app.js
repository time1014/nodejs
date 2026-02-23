const express = require('express'); // express 임포트
const fs = require('fs');
const path = require('path');
const app = express(); // 인스턴스
const customerRoute = require('./routes/customer');

//정적파일
app.use(express.static('public'));

//body parser
app.use(express.urlencoded());
app.use(express.json());

//라우팅 요청방식 + URL(end point) => 실행할 함수
app.get('/', (req, res) => {
  const json = JSON.stringify({ id: 'user99', name: 'hong' })
  //fs.readFile   /   fs.readFileSync
  const filePath = path.join(__dirname, "index.html"); 
  const data = fs.readFileSync(filePath, "utf-8");
  res.send(data);
});

//get요청(parameter로 처리)
app.get('/login/:uid/:passwd', (req, res) => {
  console.log(req.params);
  res.send('login page');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('login page');
});


app.get('/error', (req, res) => {
  throw new Error('에러발생');
})


// 외부 라우팅 정보 
app.use('/customer', customerRoute);
app.use('/product',require('./routes/product'));


//express에서 에러처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});


//서버실행
app.listen(3000, () => {
  console.log('서버실행...http://localhost:3000')
});