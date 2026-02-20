const { boardList, userName } = require("./board");
const { logger } = require("./console_class");

let result = boardList();
console.log(result);
console.log(userName)

for (let board of result) {
  logger.log(`${board.bno},${board.title}`)
}