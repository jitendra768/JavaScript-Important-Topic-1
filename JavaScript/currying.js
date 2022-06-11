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
// const sum = adddition(4);
// const data = sum(5);
// const data1= data(6)
// console.log(data1);

// in currying funnction

const sum = adddition(4)(5)(6);
console.log(sum);