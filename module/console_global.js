console.log('hello %s', 'world');
const world = 'world';
console.log(`hello ${world}`);
console.error(new Error('에러 메세지'));
const arr = [
  { name: 'kim', email: 'asd@naver.com' },
  { name: 'lee', email: 'ddd@naver.com' }
  
];
console.table(arr);
const obj = {
  students: {
    grade1: {
      class1: {
        groupA: {
          student1: {
            name: "minsu",
            score: {
              math: 90,
              english: 85
            }
          }
        }
      },
      class2: {
        groupA: {
          student2: {
            name: "jiyoon",
            score: {
              math: 88,
              english: 92
            }
          }
        }
      }
    },
    grade2: {
      class1: {
        groupB: {
          student3: {
            name: "junho",
            score: {
              math: 95,
              english: 89
            }
          }
        }
      },
      class2: {
        groupB: {
          student4: {
            name: "seohee",
            score: {
              math: 78,
              english: 91
            }
          }
        }
      }
    },
    teachers: {
      homeroom: {
        grade1: {
          class1: {
            main: "kim"
          }
        }
      },
      subject: {
        math: {
          grade2: {
            class1: "lee"
          }
        }
      }
    }
  }
};
console.dir(obj, { depth: 5, color: true });
console.time('time for for-loop');
for (let i = 0; i < 999999; i++){ }
console.timeEnd('time for for-loop');