// 1. Find Non repeated First Character given string

let str = 'ABCDBC';
let new_arr = [];

// new_arr.push('amit');
for (let index in str) {
  if (new_arr.indexOf(str[index]) !== -1) {
    for (var i = 0; i < new_arr.length; i++) {
      if (new_arr[i] === str[index]) {
        new_arr.splice(i, 1);
        i--;
      }
    }
  } else {
    new_arr.push(str[index]);
  }
}
console.log(new_arr[0]);


// 2 Question if put var then given 10 as 10 time bcz var is globle Scope
// you can fix with let 

for(let i=0; i<10; i++){
  setTimeout(()=>{
    console.log(i);
  },1000)
};