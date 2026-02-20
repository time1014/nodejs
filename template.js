const obj = {
  name: "Hongkildong",
  age: 20,
  showInfo: function () {
    return `이름:${this.name}, 나이:${this.age}`    
  }
}

console.log('이름' + obj['name'] + "나이" + obj['age']);
console.log(`이름은 ${obj['name']} 이고 나이는 ${obj['age']}이고 ${obj.age >= 20 ? "성인" : "미성년자"}입니다`);
console.log(`obj의 정보 : ${obj.showInfo()}`);
console.log(`남자들의 이름은 ${ary
  .filter((ele)=> ele.gender == "Male")
  .map((ele) => ele.first_name).join(",")}`,
);

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj2 = {
  first_name: 'kildong',
  last_name: "hong",
  age:20,
}
const { first_name, last_name, age } = obj2;
const [a1, ...a2] = arr1;
console.log(a1, a2);

const [m1, m2, m3] = getMember();
console.log(m1, m2, m3);

function sum(n1 = 0, n2 = 0, ...args) {
  let result = n1 + n2;
  for (let i = 0; i < args.length; i++){
    result += args[i];
  }
  return result;
}

result = sum(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result);