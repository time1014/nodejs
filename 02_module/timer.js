const { Console } = require('console');
const fs = require('fs');

setTimeout(function () {
  console.log('1초후 실행')
}, 1000);

const output = fs.WriteStream('./output/stdout.log');
const logger = new Console({ stdout: output});


const job = setInterval(function () {
  logger.log('현재시간에 실행')
}, 1000)


setTimeout(() => {
  clearInterval(job);
},10000)