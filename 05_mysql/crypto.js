const crypto = require('crypto');
require('dotenv').config();

//평문을 암호화하는 함수
function createPassword(plainTxt) {
  const salt = process.env.MYSQL_SALT;
  const passwd = crypto.pbkdf2Sync(plainTxt, salt, 100000, 64, 'sha512')
  // console.log(passwd.toString("base64"));
  return passwd.toString("base64");
  }; 

//입력한 비밀번호 vs 데이터베이스에 저장된 값과 비교
function checkPassword(plainTxt,hashPasswd) {
  const hashPasswd1 = createPassword(plainTxt);
  return hashPasswd1 === hashPasswd;
}
// createPassword('test1234');

const dbPasswd = `XR4yhP9UD9JVsjCtlqIWxXxIcSA0+oW401XscI16mkTyYv7FImJpMZamsiewkwyJXwwqjDu+WqfTPZmxHws8Fg==` //test1234의 고정 salt의 암호화 값 비교 테스트
console.log(checkPassword('test1231', dbPasswd)); 

module.exports = { createPassword, checkPassword };