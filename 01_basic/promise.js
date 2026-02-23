// result = fetch('./MOCK_DATA.json')
//   .then((resp)=>resp.json())
//   .then((result) => {
//     console.log(result);
//   })
// console.log(result);

// console.log("end of prog");

const promise = new Promise(function (resolve,reject) {
  console.log("promise call");
  resolve("OK");
})

promise
  .then((param) => {
    console.log(param);
    return 1;
  })
  .then((param) => {
    console.log(param)
  })
  .catch((param) => {
    console.error(param)
  })

let data1 = 10;
const p1 = new Promise(function (resolve) {
  setTimeout(() => {
    console.log('1번째');
    data1 += 5;
    resolve(data1);
  }, 2000);
});

p1.then((data1) => {
  return new Promise(function (resolve) {
      setTimeout(() => {
        console.log('2번째')
        data1 *= 2;
        resolve(data1);
      }, 3000);
  })
}).then((data1) => {
  return new Promise(function () {
      setTimeout(() => {
        console.log('3번째');
        data1 -= 7;
        console.log(`data=> ${data1}`);
      }, 1000);
  })
})


// let answer = 10;

// setTimeout(() => {
//   console.log("첫번째");
//   answer += 5;
//   console.log(`answer => ${answer}`)
//   setTimeout(() => {
//   console.log('2번째');
//   answer *= 2;
//     console.log(`answer => ${answer}`)
//     setTimeout(() => {
//   console.log('3번째');
//   answer -= 7;
//       console.log(`answer => ${answer}`);
      
//     }, 1100);
//   }, 800);
// }, 1000);




