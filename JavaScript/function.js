// function with CoderGyan

function login(userName, password) {
  console.log(`${userName} login successfull`);
}
// login('Amit')

function upperCase(str) {
  return str.toUpperCase();
}
const upper = upperCase('javascript');
// console.log(upper);

// how to js work

var n = 2;
function square(num) {
  return num * num;
}
const square1 = square(n);
const square2 = square(4);
// console.log(square1);
// console.log(square2);

// how to function work in js

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
