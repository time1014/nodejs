const crypto = require('crypto');

const pw = crypto.createHash("sha512").update("test1234").digest("base64");
// console.log(pw);
async function createPassword() {
  const salt = await new Promise((resolve, reject) => {
  crypto.randomBytes(64, (err, buf) => {
  if (err) {
    console.log(err);
    reject(err);
  }
    console.log(buf.toString("base64"));
    resolve(buf.toString("base64"));
  })
    
  })
  
  console.log(salt);
} 
createPassword();


crypto.pbkdf2('test1234 ', salt, 100000, 64, 'sha512', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString('base64'))
}); //암호화 평문,salt값,10만번 반복해시,길이,해시함수,callback함수