console.clear()
result = [10, 15, 20, 25, 30].reduce((accum, ele, idx) => {
  console.log(idx, "->", accum, ele);
  if (ele >= 20) {
    const li = document.createElement("li");
    li.innerText = ele;
    accum.appendChild(li);
  }
  return accum;
}, document.querySelector('#list'));

console.log(result);

console.clear()
const ms = ary.filter((ele)=> ele.gender == 'Male')
result = ms.reduce((accum, ele, idx) => {
  
  return accum + ele.salary ;
}, 0);
console.log('남자급여합계:'+result);




result = ary.reduce((accum, ele) => {
  if (ele.gender == 'Female' && ele.salary <= 10000) {
    const { id, first_name, last_name, email, salary } = ele;
    accum.push({
      no: id,
      name: first_name + last_name,
      email,
      salary
    });
  }
  return accum;
}, []);

console.log(result);