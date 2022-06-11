// Changing the content of array is
// possible in cost array

// const arr1 = ['pankaj', 'sumit', 'chandan', 'ajay'];

// console.log(arr1.toString());

// arr1[2]='Amit';  //possible
// arr1.push('shubham');

// console.log(arr1.toString());

// It describes that the object properties can be modified only reference to object cannot be changed.

// const person = {
//   first_name: "Pankaj",
//   last_name: "Singh",
//   Age: 20,
//   About: "Web Developer and Competitive Programmer"
// };

// console.log(person);
// person.first_name= 'Amit';
// person.Age= 26;
// person.last_name='kumar';
// console.log(person);


// It describes the const variable which contains the Block Scope.

// const x = 22;
// {
//     const x = 90;
//     console.log(x);

//     {
//         const x = 77;
//         console.log(x);
//     }
//     {
//         const x = 45;
//         console.log(x);
//     }
// }
// console.log(x);



// Interview Question
for(var i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i)
    });
};