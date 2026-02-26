//express 인스턴스
const express = require('express');
const session = require('express-session')
require('dotenv').config();

// 서버 인스턴스
const app = express();
app.use(express.static('public'))

app.use(express.json());


app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 10*60*1000,
  },
})
)



app.use('/api/board', require('./routes/boardRoutes'));
app.use("/api/auth", require("./routes/authRoutes"));


//서버 시작
app.listen(3000, () => {
  console.log('server running...')
});