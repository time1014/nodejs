//sql 쿼리 결과 호출

const pool = require('../config/db');

async function getList() {
  const sql = `
  SELECT b.* , m.login_id , m.name
  from tbl_board b
  JOIN tbl_member m ON b.writer_id = m.member_id
  ORDER BY b.board_id DESC
  `;
  return pool.query(sql);
}
async function getById(id) {
  const sql = `
SELECT 
  b.board_id,
  b.title,
  DATE_FORMAT(b.created_at, '%Y-%m-%d') AS created_at,
  m.login_id,
  m.name
FROM tbl_board b
JOIN tbl_member m ON b.writer_id = m.member_id
WHERE b.board_id = ?;
  `
  return pool.query(sql ,[id]);
}

//등록 insert
async function insert(title, content, id ) {
  const sql = `
  INSERT INTO tbl_board (title,content,writer_id)
  values(?,?,?)
  `
  return pool.query(sql,[ title, content, id ])
}


module.exports = { getList , getById,insert };