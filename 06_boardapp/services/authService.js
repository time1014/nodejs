const authModel = require('../models/memberModel');
const bcrypt = require('bcrypt');


async function signUp(loginId, name, password, role) {
  const hashed = await bcrypt.hash(password, 10); // 암호화

  return authModel.createMember( loginId,name,hashed,role );
}

// 맞는 로그인 값 없을땐 length 부분에서 막혀서 null 리턴하고 비번만 틀릴땐 !match가 false가 되면서 null을 리턴하고 맞으면 user를 리턴함
async function login(loginId, password) {
  const [rows] = await authModel.findMemberById(loginId);
  if (rows.length == 0) {
    return null;
  }
  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);
  
  if (!match) {
    return null;
  } else {  
    return user;
  }
}


module.exports = {signUp ,login};