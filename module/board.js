function boardList() {
  return [
    { bno: 1, title: '1번글', content: '1번글 내용', writer: 'user01' },
    {bno : 2, title : '2번글' , content : '2번글 내용' , writer : 'user02'},
    {bno : 3, title : '3번글' , content : '3번글 내용' , writer : 'user03'},
  ]
}
const userName = "Hong";
const age = 20;

module.exports = {boardList , userName}