// Spread Operator
// Spread Operator in Array

// const arr = ['javascript', 'c++', 'python'];
// const new_arr = [...arr, 'java'];
// const [name, ...spreadofname]= arr;
// console.log(name, ...spreadofname);
// console.log(new_arr);

// Spread Operator in object

const setting = {
  volume: 10,
  brightness: 80,
};
const newSetting = { ...setting, contrast: 50 };
console.log(newSetting);


// rest Operator 
// rest parameter in function

const addItems = (a, ...items)=>{
 console.log(a, items);
}
addItems(5,6,7,8)

// rest in Array 
// const figure = [0,1,2,3,4];
// const [first, ...restofnumber]=figure;
// console.log(first, restofnumber);

// rest in object 

// const user = {
//   password:'01234',
//   salt: 'abcd',
//   name: 'amit',
//   email:'amit123@gmail.com'
// };
// const {password, salt, ...restofuser}=user;
// console.log(password, salt, restofuser)
