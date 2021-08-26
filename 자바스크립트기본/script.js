"use strict";
// 이 코드는 모던한 방식으로 실행됩니다.

function checkAge(age) {
  return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?');
}
  

function min(a, b) {
  return Math.min(a, b);
}

console.log(min(3, 5));

function pow(a, b) {
  let result = 1;
  for (let index = 0; index < b; index++) {
    result *= a;
  }
  return result;
}

console.log(pow(3, 3));