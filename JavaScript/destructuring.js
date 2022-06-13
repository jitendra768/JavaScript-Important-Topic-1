// Object Destructuring

const users = {
  name: 'Amit',
  age: 87,
  address: 'bhagalpur',
};
// console.log(users);
// const { name, age, address } = users;
// console.log(name, age, address);

// -------------nested object destructuring---------------
const user={
  name:'Jack',
  address: 'South Delhi india',
  age:25,
  department:{
    name:'Softaware Engineer',
    shift:'Morning',
    address:{
      city: 'Noida',
      street:'Shanti vihar',
      zip: 221716,
    }
  }
}
console.log(user);
// How do we extract the value of the department property? Ok, it should be straight-forward by now.

const {department}=user;
console.log(department)

// How do we extract the value of the address property of the department
const{department:{address}}=user;
console.log(address);

// How do we extract the value of city from the department's address? Same principle again!
const{department:{address:{city}}}=user;
console.log(city);