const radius = [3, 1, 2, 4];

// calculate Area of circle

// const calculateArea = function(radius){
//   output = [];
//   for(let i=0; i<radius.length; i++){
//     output.push(Math.PI  * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

// calculate area of Circumference

// const calculateCircumference = function(radius){
//   output = [];
//   for(let i=0; i<radius.length; i++){
//     output.push(2 * Math.PI  * radius[i]);
//   }
//   return output;
// };
// console.log(calculateCircumference(radius));

// calculate circle of diameter
// const calculateDiameter = function(radius){
//   const output = [];
//   for(let i=0; i<radius.length; i++){
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radius));

// problem top code don't repeat yourself
// solve the problem using hof
const area = function (radius) {
  return Math.PI * radius * radius;
};

const Circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(radius.map(area));  //similar to calculate function

console.log(calculate(radius, area));
// console.log(calculate(radius, Circumference));
// console.log(calculate(radius, diameter));
