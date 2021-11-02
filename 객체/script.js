// 1. 객체야 안녕?

// let user = {
//   name: "John",
//   surname: "Smith",
// };

// user["name"] = "Pete";

// delete user.name;

// console.log(user);


// 2. 객체가 비어있는지 확인하기

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// function isEmpty(obj) {
//   for (let key in obj) {
//     // if the loop has started, there is a property
//     return false;
//   }
//   return true;
// }



// 3. 변하지 않는 객체?

// const user = {
//   name: "John"
// };
// // 아래 코드는 에러 없이 실행될까요?
// user.name = "Pete"; // True

/*
const는 한 번이라도 값을 할당한 변수가 변경되는 걸 막습니다.

변수 user는 객체 참조 값을 저장하고 있는데, const는 이 값이 변경되는걸 막는 것이지, 객체의 내용(프로퍼티)을 변경하는 건 막지 않습니다.

*/



// 4. 프로퍼티 합계 구하기
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let result = 0;
// for (let key in salaries) {
//   result += salaries[key];
// }
// alert(result);



// 5. 프로퍼티 값 두배로 부풀리기

// 함수 호출 전
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);


// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (!isNaN(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
// }

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(menu);

// // 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };


// 객체 리터럴에서 'this' 사용하기


// function makeUser() {
//   return {
//     name: "John",
//     ref: this // undefined
//   };
// };

// let user = makeUser();

// console.log( user.ref.name ); // 결과가 어떻게 될까요? // Error: Cannot read property 'name' of undefined.

/*
에러가 발생하는 이유는 this 값을 설정할 땐 객체 정의가 사용되지 않기 때문입니다. this 값은 호출 시점에 결정됩니다.

위 코드에서 makeUser() 내 this는 undefined가 됩니다. 메서드로써 호출된 게 아니라 함수로써 호출되었기 때문입니다.

this 값은 전체 함수가 됩니다. 코드 블록과 객체 리터럴은 여기에 영향을 주지 않습니다.

따라서 ref: this는 함수의 현재 this 값을 가져옵니다.

this의 값이 undefined가 되게 함수를 다시 작성하면 다음과 같습니다.
*/

// function makeUser(){
//   return this; // 이번엔 객체 리터럴을 사용하지 않았습니다.
// }

// console.log( makeUser().name ); // Error: Cannot read property 'name' of undefined

// 에러가 발생하지 않게 하려면 코드를 다음과 같이 수정하면 됩니다.

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

console.log( user.ref().name ); // John

// 이렇게 하면 user.ref()가 메서드가 되고 this는 . 앞의 객체가 되기 때문에 에러가 발생하지 않습니다.






// 계산기 만들기

// let calculator = {
//   // ... 여기에 답안 작성...
//   read() {
//     this.a = Number(prompt('값을 입력하세요'), 0);
//     this.b = Number(prompt('값을 입력하세요'), 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   }
// }

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );


console.log('------------------');
// 체이닝

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log( this.step );
    return this;
  }
};


// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.

ladder.up().up().down().showStep(); // 1