// 업무, 
const boardModel = require('../models/boardModel');

// 서비스 - 모델 : 1:1매칭
// 글목록 조회 업무.
async function getList() {
  return boardModel.getList();
}

//단건 조회
async function getDetail(id) {
  return boardModel.getById(id);
}

//등록 create
async function insert(title, content, id ) {
  return boardModel.insert( title, content, id );
}

module.exports = { getList ,getDetail ,insert };