// 엑셀파일 읽기 readfile
// 시트중에서 첫번째 [0] 시트이름 읽기
// -> json , csv , 메소드 

const xlsx = require("xlsx");
const mysql = require("./index");

async function excelRun(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0]
  const firstSheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(firstSheet);
  console.log(jsonData);


  for (let ele of jsonData) {
    // console.log(ele["이름"]);
    const param = {
      name: ele['이름'],
      email: ele['이메일'],
      phone: ele['연락처'],
      passwd : ele['비밀번호']
    }
    try {
      const result = await mysql.query('customerInsert', [param]);
      console.log(result);
    } catch (err) {
      console.log(err)
    }
  }
} 

module.exports = { excelRun };