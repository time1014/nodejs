const { ary } = require('./data');
console.log(ary);

//Male 인 목록
//{Male : [{},{},{},...{}]}


const result = ary.reduce((accum, ele) => {
  const { id, first_name, last_name, gender, email, salary } = ele;
  if (ele.gender == "Male") {
    accum.Male.push({
      id,
      first_name,
      last_name,
      email,
      gender,
      salary
    });
  }
  
  return accum;
  
}, {Male:[]});

console.log(result);


const group_by_gender = (accum, ele) => {
  if (accum[ele.gender] == undefined) {
    accum[ele.gender] = [];
  }
  accum[ele.gender].push(ele.first_name);
  return accum;
}
result = ary.reduce(
    group_by_gender,
    {}
)