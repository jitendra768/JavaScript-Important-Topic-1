// closers in javascript

// ---------example-----------------

// var sum = function(a){
//     console.log("live weievers" +a);
//     var c=4;
//     return function(b){
//         return a+b+c;
//     }
// }

// var store = sum(2);
// console.log(store(5));


// ---------------------example2-----------------------------

// const outerfun= (a)=>{
//     let b=10;
//     const innerfun = ()=>{
//         let sum = a+b;
//         console.log(`the sum of two number ${sum}`)
//     }
//     // innerfun();
//     return innerfun;
// }
// let inner = outerfun(5);
// console.dir(inner);

// const username = 'amit';

// function login(){
//     const password = 'secret';
//     console.log(`${username} is loging in using ${password}`);
// };
// login();



// ----------Akshay Saini -----------

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// as a parameter pass function


// function x(){
//     var a = 7;
    
//     y();
// }
// x(function y(){
//     console.log(a);
// });


// also return a function

// function x(){
//   var a = 7;
//   function y(){
//       console.log(a);
//   }
  // a = 100;   //given for confusion a interviewer  it will be hundred
//   return y;
// }
// const z  = x();
// console.log(z);
// z();


function z(){
    var b = 20;
    function x(){
        var a = 3;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();


