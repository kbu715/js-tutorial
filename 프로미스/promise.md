## 프로미스 promise
```javascript
let promise = new Promise(function(resolve, reject) {
  // executor 
});
```

`executor`는 자동으로 실행되는데 여기서 원하는 일이 처리됩니다. 처리가 끝나면 `executor`는 처리 성공 여부에 따라 `resolve`나 `reject`를 호출합니다.

한편, `new Promise` 생성자가 반환하는 `promise` 객체는 다음과 같은 내부 프로퍼티를 갖습니다.

- `state` — 처음엔 `pending`(보류)이었다 `resolve`가 호출되면 `fulfilled`, `reject`가 호출되면 `rejected`로 변합니다.

- `result` — 처음엔 `undefined`이었다 `resolve(value)`가 호출되면 `value`로, `reject(error)`가 호출되면 `error`로 변합니다.

![image](https://user-images.githubusercontent.com/63832678/144051579-3a2a1d1c-757c-41e4-8df9-d63d62785e5e.png)


```javascript
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("done"), 1000);
});
```

1. `executor`는 `new Promise`에 의해 자동으로 그리고 즉각적으로 호출됩니다.

2. `executor`는 인자로 `resolve`와 `reject` 함수를 받습니다. 이 함수들은 자바스크립트 엔진이 미리 정의한 함수이므로 개발자가 따로 만들 필요가 없습니다. 다만, `resolve`나 `reject` 중 하나는 반드시 호출해야 합니다.

이처럼 일이 성공적으로 처리되었을 때의 프라미스는 'fulfilled promise(약속이 이행된 프라미스)'라고 불립니다.

이번에는 executor가 에러와 함께 약속한 작업을 거부하는 경우에 대해 살펴봅시다.


```javascript
let promise = new Promise(function(resolve, reject) {
  // 1초 뒤에 에러와 함께 실행이 종료되었다는 신호를 보냅니다.
  setTimeout(() => reject(new Error("에러 발생!")), 1000);
});
```

1초 후 `reject(...)`가 호출되면 `promise`의 상태가 `"rejected"`로 변합니다.

이행(resolved) 혹은 거부(rejected) 상태의 프라미스는 ‘처리된(settled)’ 프라미스라고 부릅니다. 반대되는 프라미스로 '대기(pending)'상태의 프라미스가 있습니다.


### 프로미스는 성공 또는 실패만 합니다.

executor는 `resolve`나 `reject` 중 하나를 반드시 호출해야 합니다. 이때 변경된 상태는 더 이상 변하지 않습니다.

처리가 끝난 프라미스에 `resolve`와 `reject`를 호출하면 무시되죠.


```javascript
let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // 무시됨
  setTimeout(() => resolve("…")); // 무시됨
});
```

이렇게 executor에 의해 처리가 끝난 일은 결과 혹은 에러만 가질 수 있습니다.

여기에 더하여 `resolve`나 `reject`는 인수를 하나만 받고(혹은 아무것도 받지 않음) 그 이외의 인수는 무시한다는 특성도 있습니다.


### `state`와 `result`는 내부에 있습니다.

프라미스 객체의 `state`, `result` 프로퍼티는 내부 프로퍼티이므로 개발자가 직접 접근할 수 없습니다. `.then`/`.catch`/`.finally` 메서드를 사용하면 접근 가능한데, 자세한 내용은 아래에서 살펴보겠습니다.


### then, catch, finally

프라미스 객체는 executor(‘제작 코드’ 혹은 ‘가수’)와 결과나 에러를 받을 소비 함수(‘팬’)를 이어주는 역할을 합니다. 소비함수는 `.then`, `.catch`, `.finally` 메서드를 사용해 등록(구독)됩니다.

### then

`.then`은 프라미스에서 가장 중요하고 기본이 되는 메서드입니다.

문법은 다음과 같습니다.

```javascript
promise.then(
  function(result) { /* 결과(result)를 다룹니다 */ },
  function(error) { /* 에러(error)를 다룹니다 */ }
);
```


```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve 함수는 .then의 첫 번째 함수(인수)를 실행합니다.
promise.then(
  result => alert(result), // 1초 후 "done!"을 출력
  error => alert(error) // 실행되지 않음
);
```


### catch

에러가 발생한 경우만 다루고 싶다면 `.then(null, errorHandlingFunction)`같이 `null`을 첫 번째 인수로 전달하면 됩니다. `.catch(errorHandlingFunction)`를 써도 되는데, `.catch`는 `.then`에 `null`을 전달하는 것과 동일하게 작동합니다.


```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("에러 발생!")), 1000);
});

// .catch(f)는 promise.then(null, f)과 동일하게 작동합니다
promise.catch(alert); // 1초 뒤 "Error: 에러 발생!" 출력
```

### finally

`try {...} catch {...}`에 `finally` 절이 있는 것처럼, 프라미스에도 `finally`가 있습니다.

프라미스가 처리되면(이행이나 거부) f가 항상 실행된다는 점에서 `.finally(f)` 호출은 `.then(f, f)`과 유사합니다.

쓸모가 없어진 로딩 인디케이터(loading indicator)를 멈추는 경우같이, 결과가 어떻든 마무리가 필요하면 `finally`가 유용합니다.

사용법은 아래와 같습니다.


```javascript
new Promise((resolve, reject) => {
  /* 시간이 걸리는 어떤 일을 수행하고, 그 후 resolve, reject를 호출함 */
})
  // 성공·실패 여부와 상관없이 프라미스가 처리되면 실행됨
  .finally(() => 로딩 인디케이터 중지)
  .then(result => alert(result));  // .then에서 result를 다룰 수 있음
  // .catch(error => alert(error));// .catch에서 에러 객체를 다룰 수 있음
```