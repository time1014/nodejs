const {Console} = require('console');
const { boardList} = require("./board");
const fs  = require('fs');

// console.log(console)
// console.table(boardList());
const output = fs.createWriteStream('./output/stdout.log', { flags: 'a' });
const errorLog = fs.createWriteStream('./output/stderr.log', { flags: 'a' });


const logger = new Console({ stdout: output, stderr:errorLog });
// logger.log('현재 시간은' + new Date());
// logger.error('에러발생');


module.exports = {logger};