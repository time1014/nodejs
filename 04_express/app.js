const express = require('express'); // express 임포트
const fs = require('fs');
const session = require('express-session')
const fileStore = require('session-file-store')(session);
const path = require('path');
const cors = require('cors');
const app = express(); // 인스턴스
const customerRoute = require('./routes/customer');
const compression = require('compression');



//정적파일
app.use(express.static('public'));

//body parser
app.use(express.urlencoded());
app.use(express.json());
app.use('/customer/download', compression());
// app.use(compression()); // 모든 라우팅에 적용

app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 60000,
  },
  // store : new fileStore()
})
)

app.use(cors());

//라우팅 요청방식 + URL(end point) => 실행할 함수
app.get('/', (req, res) => {
  const json = JSON.stringify({ id: 'user99', name: 'hong' })
  const filePath = path.join(__dirname, "index.html");
  const data = fs.readFileSync(filePath, "utf-8");
  res.send(data);
});


// 외부 라우팅 정보 
app.use('/customer', customerRoute);
app.use('/product',require('./routes/product'));

app.get('/data', (req, res) => {
  res.json({id:'1001' , data:'sample'})
})

app.get('/login', (req, res) => {
  req.session.user = { id: 'user99', name: 'hong' };
  
  res.send('session에 저장')
})

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('로그아웃')
})

app.get('/my_info', (req, res) => {
  if (!req.session.user) {
    res.json({ retCode: 'NG', retMsg: 'no user info' })
    return;
  }
  
  res.json(req.session.user);
})

//express에서 에러처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
});


//서버실행
app.listen(3000, () => {
  console.log('서버실행...http://localhost:3000')
});