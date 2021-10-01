// 1. 객체야 안녕?

// let user = {
//   name: "John",
//   surname: "Smith",
// };

// user["name"] = "Pete";

// delete user.name;

// console.log(user);


// 2. 객체가 비어있는지 확인하기

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}



// 3. 변하지 않는 객체?

const user = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete"; // True

/*
const는 한 번이라도 값을 할당한 변수가 변경되는 걸 막습니다.

변수 user는 객체 참조 값을 저장하고 있는데, const는 이 값이 변경되는걸 막는 것이지, 객체의 내용(프로퍼티)을 변경하는 건 막지 않습니다.

*/



// 4. 프로퍼티 합계 구하기
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let result = 0;
for (let key in salaries) {
  result += salaries[key];
}
alert(result);



// 5. 프로퍼티 값 두배로 부풀리기

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);


// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (!isNaN(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
// }

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

console.log(menu);

// // 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };