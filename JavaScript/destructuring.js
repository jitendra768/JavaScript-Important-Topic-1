// Object Destructuring

const users = {
  name: 'Amit',
  age: 87,
  address: 'bhagalpur',
};
// console.log(users);
const { name, age, address } = users;
// console.log(name, age, address);

// -------------nested object destructuring---------------



var count = 0;
while (count<10){
  console.log(count);
  count++
}