const pool = require('../config/db');


//등록 insert
async function createMember(loginId,name,password,role ) {
  const sql = `
  INSERT INTO tbl_member (login_id,name,password,role)
  values(?,?,?,?)
  `
  return pool.query(sql,[ loginId,name,password,role ])
}

async function findMemberById(loginId) {
  const sql = `
  SELECT *
  FROM tbl_member
  WHERE login_id = ?
  `
  return pool.query(sql, [loginId]);
}



module.exports = { createMember, findMemberById};
