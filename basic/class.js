//객체
class Student{
  constructor(studNo,studName,height) {
    this.studNo = studNo;
    this.stuName = studName;
    this.height = height;

  }  
  showInfo() {
    return `학번은 ${this.studNo}이고 , 이름은 ${this.studName}`
  }
}

const s1 = new Student('S001', '홍길동', 176.9);
console.log(s1.showInfo());
const s2 = new Student('S002', '박민수', 180.9);

//인스턴스
const obj = { 
  name: "Hong",
  age: 20,
  friend: ['kim', 'park', 'chou'],
  pets: [
    { name: 'dog', age: 2, friends: ['누렁이', '고양이'] },
    {name : 'cat' , age : 3}
  ],
  showInfo: function () {
    return `이름은 ${this.name}`;
  }
}
console.log(obj['pets'][0]['friends'][0]);


function Member(memberNo,memberName) {
  this.memberNo = memberNo;
  this.memberName = memberName;
  this.showInfo = () =>{ 
    return `번호는${this.memberNo}이고 이름은 ${this.memberName}`;
  }
    
}
const m1 = new Member('M001', 'user01');
console.log(m1.showInfo());