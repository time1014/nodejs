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


module.exports = router;