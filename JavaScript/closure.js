// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// if return then what

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
const z = x();
console.log(z);
z();
