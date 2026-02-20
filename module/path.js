const path = require('path');
const fs = require('fs');

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename, ".js"));

const filePath = path.join(__dirname, "package.json");

const data = fs.readFileSync(filePath, "utf-8");
console.log(data);

fs.writeFile(__dirname + '//todo.txt', "연습이빈다", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("write done")
})


console.log("end of prog");





// fs.readFile(filePath,'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// })
