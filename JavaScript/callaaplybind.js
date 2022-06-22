// userDetails = {
//   name:'Amit Kumar',
//   Age:28,
//   Designation: 'Software Engineer',
//   printDetails: function(){
//     console.log(this.name)
//   }
// }
// userDetails.printDetails();

// case 1 - if we have a more object and point to same logic what to do?

// userDetails2 = {
//   name:'Sachin Kumar',
//   Age:28,
//   Designation: 'Software Engineer',
// }

// userDetails.printDetails.call(userDetails2);

// casse -2 if function outside of object then what to do

// userDetails = {
//   name: 'Amit Kumar',
//   Age: 28,
//   Designation: 'Software Engineer',
// };

// // outside function 
// let printDetails = function () {
//   console.log(this.name);
// };

// printDetails.call(userDetails);

// userDetails2 = {
//   name: 'Sachin Kumar',
//   Age: 28,
//   Designation: 'Software Engineer',
// };

// printDetails.call(userDetails2);

// case 3- pass parameter usinng apply method

userDetails = {
  name: 'Amit Kumar',
  Age: 28,
  Designation: 'Software Engineer',
};

// outside function 
let printDetails = function (state,country) {
  console.log(this.name+" "+ state+" "+country);
};

printDetails.call(userDetails,'Delhi','india');

userDetails2 = {
  name: 'Sachin Kumar',
  Age: 28,
  Designation: 'Software Engineer',
};

// call 
printDetails.call(userDetails2, 'Delhi','india');

// apply
printDetails.apply(userDetails2,["Delhi","India"]);

// bind 
let newfun = printDetails.bind(userDetails,'Delhi','india');
// console.log(newfun);
newfun();