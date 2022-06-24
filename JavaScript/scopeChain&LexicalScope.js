// ----------Akshay Saini------------
// 1.
function a() {
  console.log(b);
}

var b = 10;
a();

// 2.

// function a() {
// c();
// function c() {
// console.log(b);
//   }
// }

// var b = 10;
// a();

// 3.

// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();

//1 What exactly is Scope?

// Define a variable in the global scope:
const fullName = 'Oluwatobi Sofela';

// Define nested functions:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

const result = profile();
console.log(result);

// if we have define three fullName

// const FullName = 'Shubham kumar';

// function details() {
//   const FullName = 'Amit kumar';

//   function name() {
//     const FullName = 'Sachin shahani';

//     function anotherName() {
//       return FullName;
//     }
//     return anotherName();
//   }
//   return name();
// }
// console.log(details());
