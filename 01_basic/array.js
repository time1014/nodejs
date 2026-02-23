console.clear();

const less_than_10000 = ary.filter((elem,idx) => {
  if (elem.salary < 10000) {
    return true;
  } else {
    return false;
  }
});

const more_than_8000F = (elem)=> elem.gender == "Female" && elem.salary >= 8000; 


result = ary.filter(more_than_8000F).map((ele, idx) => {
  //객체 구조분해
  const { id, first_name, last_name, gender, email, salary } = ele;

  const obj = {
    no: id,
    name: first_name + "-" + last_name,
    gender,
    salary
  };
  return obj;
});
console.log(result);


