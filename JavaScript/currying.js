// Normal function use

function addition(a, b, c) {
  return a + b + c;
}
const res = addition(4, 5, 6);
console.log(res);

// in closure

function adddition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// const sum = adddition(4);
// const data = sum(5);
// const data1= data(6)
// console.log(data1);

// in currying funnction

const sum = adddition(4)(5)(6);
console.log(sum);

// another Example
userObj = {
  name: 'Amit',
  age: 20,
};

function userInfo(obj) {
  return function (userInfo) {
    return obj[userInfo];
  };
}
const user = userInfo(userObj);
console.log(user('name'));

// Geeks for Geeks example

// function calculateVolume(length,breadth,height){
//  return length * breadth *height;
// }

// console.log(calculateVolume(4,5,6));

// with closure in currying
function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume(4)(5)(6));

// Another Example help closure in currying function

function product(x) {
  return function (y) {
    return x * y;
  };
}
console.log(product(4)(5));
