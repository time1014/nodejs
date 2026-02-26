// control (라우트핸들러)
const boardService = require('../services/boardService');

const list = async (req, res)=> {
  const [rows] = await boardService.getList();
  console.log("현재 로그인 정보",req.session.user.login_id)
  res.json(rows);
};

const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  console.log(rows);
  res.json(rows);
}

//등록 create
const create = async (req, res) => {
  try {
    const { title, content, id } = req.body;
    const [rows] = await boardService.insert(title, content, id);
    res.json({retCode:"OK"});

  } catch(err) {
    res.json({ retCode: "NG" });
  }
  
}


module.exports = { list , detail , create};