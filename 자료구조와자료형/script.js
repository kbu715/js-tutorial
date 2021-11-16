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












// 배열은 복사가 될까요?

// 배열은 객체다






// 배열과 관련된 연산


// 1. 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.

let styles = ["Jazz", "Blues"];

// 2."Rock-n-Roll"을 배열 끝에 추가합니다.

styles.push("Rock-n-Roll");
console.log(styles);
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

// 배열의 첫 번째 요소를 꺼내서 출력합니다.

console.log(styles.shift());

// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.

styles.unshift(["Rap", "Reggae"]);
console.log(styles);









// 배열 컨텍스트에서 함수 호출하기

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ? // arr을 출력 // a,b,function(){...}


// 입력한 숫자의 합 구하기

function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("숫자를 입력해 주세요.", 0);

    // 입력받는 것을 정지해야 하는 경우
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  // let sum = 0;
  // for (let number of numbers) {
  //   sum += number;
  // }
  // return sum;

  return numbers.reduce((acc, cur) => acc+cur, 0);
}

alert( sumInput() );



// border-left-width를 borderLeftWidth로 변경하기




function camelize(str) {
  return str.split('-')
          .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
          .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));










// 특정 범위에 속하는 요소 찾기

function filterRangeInPlace(array, a, b) {
  arr = array.filter((item) => (item >= a && item <= b));
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert( arr ); // [3, 1]









// 내림차순 정렬하기

// let arr = [5, 2, 1, -10, 8];

// // 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.

// arr.sort((a, b) => b-a);

// alert( arr ); // 8, 5, 2, 1, -10



// 배열 복사본을 정렬하기



let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
  return array.slice().sort();
}

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)





// 확장 가능한 계산기

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1], // operation
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
} // 개깔끔


let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8




// 이름 매핑하기


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* 여기에 코드를 작성하세요. */
// users.map(user => user.name);


// alert( names ); // John, Pete, Mary



// 객체 매핑하기

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* 여기에 코드를 작성하세요. */

// users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith







// 나이를 기준으로 객체 정렬하기

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// function sortByAge(array) {
//   array.sort((a, b) => a.age - b.age );
// }

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete




// 배열 요소 무작위로 섞기 ??? 피셔-예이츠 알고리즘...

// let arr = [1, 2, 3];


// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...



// 평균 나이 구하기



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(array) {
  return array.reduce((acc, cur) => acc + cur.age, 0) / array.length;
}


// 중복 없는 요소 찾아내기


function unique(arr) {
  /* your code */

  return arr.filter((v,i) => arr.indexOf(v) == i)
  

}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O