// 과제

// 콜백을 이용한 움직이는 원

function go() {
  showCircle(150, 150, 100, div => {
    div.classList.add('message-ball');
    div.append("안녕하세요!");
  });
}

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';

    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      callback(div);
    });
  }, 0);
}

showCircle(150, 150, 100, div => {
  div.classList.add('message-ball');
  div.append("안녕하세요!");
});










// setTimeout에서의 에러

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("에러 발생!");
  }, 1000);
}).catch(alert);

// .catch는 트리거 되지 않습니다.

/*

이 챕터에서 언급했듯이, '암시적 try..catch'가 함수 코드를 감싸고 있으므로 모든 동기적 에러는 '암시적 try..catch'에서 처리됩니다.

하지만 여기에서 에러는 executor(실행자, 실행 함수)가 실행되는 동안이 아니라 나중에 발생합니다. 따라서 프라미스는 에러를 처리할 수 없습니다.

*/