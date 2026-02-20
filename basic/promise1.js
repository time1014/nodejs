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

async function main() {
  

  let data1 = 10;
  try {      
  const p1 = await new Promise(function (resolve) {
    setTimeout(() => {
      console.log('1번째');
      data1 += 5;
      resolve(data1);
    }, 2000);
  });
  console.log(`p1: ${p1}`);

  const p2 = await new Promise(function (resolve) {
    setTimeout(() => {
      console.log('2번째')
      data1 *= 2;
      resolve(data1);
    }, 3000);
  });

    const p3 =  await new Promise(function (resolve) {
      setTimeout(() => {
        console.log('3번째');
        data1 -= 7;
        try {
          console.log(`data=> ${data1}`);
        resolve(data1);
        } catch (err) {
          reject(err);
        }
      }, 1000);
    })
  } catch(err) {
    console.error(err);
    await new Promise(function (resolve) {
      resolve(err);
    })
  }
  console.log('end of prog')
}
main();

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




