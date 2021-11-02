function outer(outerValue) {
  return function inner(innerValue) {
    console.log(`outer value : ${outerValue}`);
    console.log(`inner value : ${innerValue}`);
  }
}

const inner = outer("겉은 바삭");

inner("속은 촉촉");



console.log(Number(null));
console.log(Number(undefined));

console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("")); // false

console.log(+true); // 1
console.log(+""); // 0