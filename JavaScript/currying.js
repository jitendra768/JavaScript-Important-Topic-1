// Normal function use  

function addition(a,b,c){
  return a + b + c;
};
const res = addition(4,5,6);
console.log(res);

// in closure 

function adddition(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
let sum = adddition(2);
console.log(result);