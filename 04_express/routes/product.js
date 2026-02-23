// product와 관련된 라우팅정보
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('product의 Root 페이지')
})


module.exports = router;