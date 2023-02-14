// Map HashTable

const urls = new Map(); //create a empty map
urls.set('development', 'dev.example.com'); //fill map
urls.set('production', 'prod.example.com');
// console.log(urls);
// console.log(urls.get('production')); //for accesing element

// -01 some problem in object

const urlsobj = {
  development: 'dev.example.com',
  production: 'prod.example.com',
};

// console.log(urlsobj);
// console.log(urlsobj.development);

for (const [key, value] of urls) {
  // console.log(key, value);
}

// -----------Akshay Saini Map(), filter(), reduce()-------------------
// -------------map---------------

const numbers = [7, 4, 5, 6];

const res = numbers.map((x) => {
  return x * 2;
});
// console.log(res);

// ------------Filter method-------------

const number = [5, 6, 7, 8, 4];

const result = number.filter((y) => {
  return y % 2 === 0;
});
// console.log(result);

// ---------Reduce Method-------------

arr = [2, 3, 6, 7];

function findsum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(findsum(arr));

// solve this example reduce method
const findSum = arr.reduce((acc, curr) => {
  return (acc = acc + curr);
});
// console.log(findSum);

// ----------Lets More Example---------------

const users = [
  { firstName: 'Amit', LastName: 'Kumar', age: 26 },
  { firstName: 'Shubham', LastName: 'Pasi', age: 52 },
  { firstName: 'Alon', LastName: 'Musk', age: 50 },
  { firstName: 'Sachin', LastName: 'Shahani', age: 26 },
];

// find All user FullName

const FullName = users.map((index) => {
  return `${index.firstName} ${index.LastName}`;
}, 0);
console.log(FullName);

// --------filter---------------find less than 30 age

const findAge = users.filter((x) => {
  return x.age <= 30;
});
console.log(findAge);

// ------Reduce-----------

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);
