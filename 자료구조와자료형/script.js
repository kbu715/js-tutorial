"use strict"

// let str = "Hello";

// str.test = 5; // (*)

// console.log(str.test);

/*
엄격 모드인지 아닌지에 따라 결과가 나뉩니다.

undefined (비 엄격 모드)
An error (엄격 모드)
(*)로 표시한 줄에서 무슨 일이 일어나는지 알아보면서, 왜 위와 같은 결과가 나타나는지 이해해 봅시다.

str의 프로퍼티에 접근하려 하면 "래퍼 객체"가 만들어집니다.
엄격 모드에선 래퍼 객체를 수정하려 할 때 에러가 발생합니다.
비 엄격 모드에선 에러가 발생하지 않습니다. 래퍼 객체에 프로퍼티 test가 추가되죠. 
그런데 래퍼 객체는 바로 삭제되기 때문에 마지막 줄이 실행될 땐 프로퍼티 test를 찾을 수 없습니다.
위 예시를 통해 원시값과 객체는 다르다는 것을 다시 한번 확인해 보았습니다.

원시값은 추가 데이터를 저장할 수 없습니다.
*/


// 수를 입력받아 덧셈하기

// const a = +prompt('The first number?', "");
// const b = +prompt('The first number?', "");

// console.log(a+b);


// 6.35.toFixed(1) == 6.3인 이뉴는 무엇일까요?

// 이 문서에 따르면 Math.round와 toFixed는 둘 다 가장 가까운 어림수를 구해줍니다. 
// 0..4는 버림하고, 5..9는 올림합니다.

// 10진법으로 나타낸 소수 6.35는 내부적으로는 2진법 무한소수입니다. 
// 따라서 이 경우에도 어김없이 정밀도 손실이 발생합니다.

// 아래 코드를 살펴봅시다.

console.log( 6.35.toFixed(20) ); // 6.34999999999999964473
// 정밀도 손실은 수를 증가시킬 수도, 감소시킬 수도 있습니다. 
// 위 예시에서는 수가 아주 약간 작아졌습니다. 따라서 반올림하면 버림이 일어납니다.

// 1.35의 경우에는 어떨까요?

console.log( 1.35.toFixed(20) ); // 1.35000000000000008882
// 이번에는 정밀도 손실로 수가 약간 증가했습니다. 따라서 반올림하면 올림이 일어납니다.

// 6.35를 제대로 반올림하려면 어떻게 해야 할까요?

// 반올림하기 전에 이 수를 정수에 가깝게 만들어야 합니다.

console.log( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
// 63.5 에서는 정밀도 손실이 전혀 발생하지 않습니다. 
// 소수 부분인 0.5가 정확히 1/2이기 때문입니다. 
// 2진법 체계에서 2의 거듭제곱으로 나눈 값은 정확하게 저장되기 때문에 제대로 반올림할 수 있습니다.

console.log( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(반올림됨) -> 6.4




// 숫자를 입력할 때까지 반복하기

/*
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

console.log(`Read: ${readNumber()}`);

*/

// A random number from min to max

function random(min, max) {
  return Math.random() * (max-min) + min
}

// A random integer from min to max

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max-min) + min)
}

let guestList = `손님:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // 손님 리스트를 여러 줄에 걸쳐 작성함




// 첫 글자를 대문자로 변경하기

function ucFirst(str) {
  if(!str) return str;

  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

alert(ucFirst("john") === "John");






// 스팸 문자열 걸러내기


function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  if(lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false




// 문자열줄이기

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxLength) {
  if(str.length > maxLength) {
    return str.slice(0, maxLength-1) + '...'
  }
  return str;
}

let longStr = truncate("What I'd like to tell on this topic is:", 20);
let shortStr = truncate("Hi everyone!", 20);

console.log(longStr);
console.log(shortStr);





// 숫자만 출력하기

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}


console.log(extractCurrencyValue('$120') === 120);


// alert( extractCurrencyValue('$120') === 120 ); // true