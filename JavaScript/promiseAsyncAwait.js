//   with CoderGyan

// scenario
// // 1. Register
// // 2. send welcome email
// // 3. login
// // 4. get user data
// // 5. Dispay user data

// function register(){
//   console.log('Register End')
// }

// function sendEmail(){
//   console.log('Send Email')
// }

// function login(){
//   console.log('Login end')
// }

// function getUserData(){
//   console.log('Get User Data')
// }

// function displayData(){
//   console.log('User data display')
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayData();

// console.log('other application work!')

// function waitForThreeSecond(){
//   let ms = 3000 + new Date().getTime();
//   while(new Date() < ms) {}
// }

// function register(){
//   waitForThreeSecond();
//   console.log('Register End')
// }

// function sendEmail(){
//   waitForThreeSecond();
//   console.log('Send Email')
// }

// function login(){
//   waitForThreeSecond();
//   console.log('Login end')
// }

// function getUserData(){
//   waitForThreeSecond();
//   console.log('Get User Data')
// }

// function displayData(){
//   waitForThreeSecond();
//   console.log('User data display')
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayData();

// console.log('other application work!')

//using callback

// function register(callback) {
//   setTimeout(() => {
//     console.log('Register End');
//     callback();
//   }, 1000);
// }

// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log('Send Email');
//     callback();
//   }, 2000);
// }

// function login(callback) {
//   setTimeout(() => {
//     console.log('Login end');
//     callback();
//   }, 3000);
// }

// function getUserData(callback) {
//   setTimeout(() => {
//     console.log('Get User Data');
//     callback();
//   }, 4000);
// }

// function displayData() {
//   setTimeout(() => {
//     console.log('User data display');
//   }, 5000);
// }

// // this is callbackHell
// register(() => {
//   sendEmail(() => {
//     login(() => {
//       getUserData(() => {
//         displayData();
//       });
//     });
//   });
// });

// console.log('other application work!');

// Solve this problem using promises

// function register() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return reject('Error While Registering');
//       console.log('Register End');
//       // resolve();
      
//     }, 3000);
//   });
// }

// function sendEmail() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Send Email');
//       resolve();
//     }, 1000);
//   });
// }

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Login end');
//       resolve();
//     }, 4000);
//   });
// }

// function getUserData() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log('Get User Data');
//       resolve();
//     }, 4000);
//   })
 
// }

// function displayData() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log('User data display');
//       resolve();
//     }, 5000);
//   })
 
// }

// this is callbackHell
// register(() => {
//   sendEmail(() => {
//     login(() => {
//       getUserData(() => {
//         displayData();
//       });
//     });
//   });
// });

// register().then(sendEmail).then(login).then(getUserData).then(displayData).catch((err)=>{
//   console.log('Error While Registering')
// });

// console.log('other application work!');


// Async await using 

// function register() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Register End');
//       resolve();
      
//     }, 3000);
//   });
// }

// function sendEmail() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Send Email');
//       resolve();
//     }, 1000);
//   });
// }

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Login end');
//       resolve();
//     }, 4000);
//   });
// }

// function getUserData() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log('Get User Data');
//       resolve();
//     }, 4000);
//   })
 
// }

// function displayData() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log('User data display');
//       resolve();
//     }, 5000);
//   })
 
// }

// async function authenticate(){
//   await register();
//   await sendEmail();
//   await login();
//   await getUserData();
//   await displayData();
// }

// authenticate().then(()=>{
//   console.log('All Proccess Is completed')
// });


// console.log('other application work!');




// Callback, async await promises by Technical SUneja 

const data = [
  {Name:'Amit', Profession:'Softaware Engineer'},
  {Name:'Shubham', Profession:'Softaware Engineer'},
];

function getData(){
  setTimeout(()=>{
    let output = '';
    data.forEach((datas,index)=>{
      output += `<li>${datas.Name}</li>`
    });
    document.body.innerHTML = output;
    console.log(output);
  },1000)
};
getData();