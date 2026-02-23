//한글 latin1
//multer 미들웨어 업로드 (업로드 경로,업로드 파일 rename)
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const encfile = Buffer.from(file.originalname, 'latin1').toString('utf-8')
    const fn = path.basename(encfile, path.extname(encfile))
    const ext = path.extname(encfile)
    const uniqueName = `${fn}_${Date.now()}${ext}`;
    cb(null, uniqueName)
  }
});

const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const encfile = Buffer.from(file.originalname, 'latin1').toString('utf-8')
    const fn = path.basename(encfile, path.extname(encfile))
    const ext = path.extname(encfile)
    const uniqueName = `${fn}_${Date.now()}${ext}`;
    cb(null, uniqueName)
  }
});


const upload = multer({ storage });
const upload2 = multer({ storage : storage2 });


module.exports = { upload ,upload2};