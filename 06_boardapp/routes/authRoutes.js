const router = require('express').Router();
const ctrl = require('../controllers/authController');

//조회 (Get요청)

//CUD
router.post('/', ctrl.signup);
router.post('/login', ctrl.login);



module.exports = router; 