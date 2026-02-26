const router = require('express').Router();
const ctrl = require('../controllers/boardController');

//조회 (Get요청)
router.get('/', ctrl.list);
router.get('/:id', ctrl.detail);


//ctrl.create 
//등록
router.post('/insert', ctrl.create);



module.exports = router; // 라우터 자체가 객체라서 {}안에 담을필요 없음


//{}객체에 담아서 export한 경우 require한 변수.함수명 /   함수 자체를 export한 경우 바로 함수사용