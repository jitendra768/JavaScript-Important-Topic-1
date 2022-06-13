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
// console.log(user);
// How do we extract the value of the department property? Ok, it should be straight-forward by now.

const {department}=user;
// console.log(department)

// How do we extract the value of the address property of the department
const{department:{address}}=user;
// console.log(address);

// How do we extract the value of city from the department's address? Same principle again!
const{department:{address:{city}}}=user;
// console.log(city);

// Destructure in Loops
// You can use object destructuring with the for-of loop. Let's take an array of user objects like this:

const users1 = [
    { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    { 
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    { 
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];

for(let {name, age, address} of users1){
  // console.log(`${name} ${age} Year old and he is living in ${address}`);
};

// Create a Clone of an Object

const user2 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
};
const clone = {...user2};
clone === user2;  //false
// console.log(clone);

// add properties to object
// const updateuser = {...user2, salary:2550};
// console.log(updateuser);

//update user properties
const updateuser = {...user2,age:56};
// console.log(updateuser);

const user3 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
};

const updated ={
    ...user,
    department:{number: 7}
} 
console.log(updated);

// Array destructuriing

const data =['amit',30,'engineer'];
const [name, age, profession]= data;
console.log(age, profession);

