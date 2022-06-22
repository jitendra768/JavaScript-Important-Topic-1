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

userDetails = {
  name:'Amit Kumar',
  Age:28,
  Designation: 'Software Engineer',
 
}
let printDetails = function(){
  console.log(this.name)
}
userDetails.printDetails();

userDetails2 = {
  name:'Sachin Kumar',
  Age:28,
  Designation: 'Software Engineer',
}

userDetails.printDetails.call(userDetails2);