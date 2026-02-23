//customer와 관련된 라우팅 정보
const router = require('express').Router();
const path = require('path');

//nodemon test
// http방식 + endpoint => crud 처리
router.get('/search', (req, res, next) => {
  console.log('middleware 요청');
  next();
}, (req, res) => {
  // res.redirect('/');
  // res.sendFile(path.join(__dirname,'./레드향.jpg'));
  console.log('응답처리중');
  res.json({ retCode: 'success', retMsg: "server status 200" })
})

router.post('/add', (req, res) => {
  res.send('post방식 요청')
});

//get요청(parameter로 처리)
router.get('/login/:uid/:passwd', (req, res) => {
  console.log(req.params);
  res.send('login page');
});

//get req.params , post req.body
router.post('/login', (req, res) => {
  console.log(req.body);
  res.send('login page');
});

//compression() 미들웨어 적용 http://localhos:3000/customer/download
router.get('/download', (req, res) => {
  // res.send('compression()모듈 적용');
  res.download(path.join(__dirname, '..','레드향.jpg'));
});

router.get('/error', (req, res) => {
  throw new Error('에러발생');
})



module.exports = router;