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

function register(callback) {
  setTimeout(() => {
    console.log('Register End');
    callback();
  }, 1000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log('Send Email');
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log('Login end');
    callback();
  }, 3000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log('Get User Data');
    callback();
  }, 4000);
}

function displayData() {
  setTimeout(() => {
    console.log('User data display');
  }, 5000);
}

register(() => {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        displayData();
      });
    });
  });
});

console.log('other application work!');
