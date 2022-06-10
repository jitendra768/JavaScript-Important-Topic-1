//   with CoderGyan

// scenario
// // 1. Register
// // 2. send welcome email
// // 3. login
// // 4. get user data
// // 5. Dispay user data

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
