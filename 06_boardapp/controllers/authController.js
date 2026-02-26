const authService = require('../services/authService');

const signup = async (req, res) => {
  try {
    const { loginId, name, password, role } = req.body;
    await authService.signUp(loginId,name,password,role);
    // console.log(rows);
    res.json({retCode:"OK"});
  } catch(err) {
    res.json({ retCode: "NG" });
  }

}

const login = async (req, res)=>{
  const { loginId, password } = req.body;
  const user = await authService.login(loginId, password);
  if (user) {
    const { member_id, login_id, name } = user;
    req.session.user = { member_id, login_id, name };
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
}



module.exports = {signup ,login};