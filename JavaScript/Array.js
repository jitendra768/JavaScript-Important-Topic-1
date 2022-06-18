// 'fruits' array created using array literal notation.

// const fruits= ['Apple', 'Banana'];
// console.log(fruits);
// console.log(fruits.length);

// 'fruits' array created using the Array() constructor.

// const fruits = new Array('Apple', 'Banana');
// console.log(fruits);
// console.log(fruits.length);

// 'fruits' array created using String.prototype.split().

// const fruits = 'Apple, Banana'.split(',');
// console.log(fruits);
// console.log(fruits.length);

// This example uses the join() method to create a string from the fruits array.

// const fruits = ['Apple', 'Banana'];
// const fruitsString = fruits.join(',');
// console.log(fruitsString);

// This example uses the indexOf() method to find the position (index) of the string "Banana" in the fruits array.

// const fruits = ['Apple', 'Banana'];
// console.log(fruits.indexOf('Banana'));

// This example shows two ways to check if the fruits array contains "Banana" and "Cherry": first with the includes() method, and then with the indexOf() method to test for an index value that's not -1.

// const fruits = ['Apple','Banana'];
// console.log(fruits.includes('Banana')); // true
// console.log(fruits.includes('Cherry')); // false

// This example uses the push() method to append a new string to the fruits array.

// const fruits = ['Apple', 'Banana'];
// const newFruits = fruits.push('Orange');
// console.warn(fruits);
// console.log(newFruits);

// Remove the last item from an array
// This example uses the pop() method to remove the last item from the fruits array.

// const fruits = ['Apple','Banana', 'Cherry'];
// const removeItem = fruits.pop();
// console.log(fruits);
// console.log(removeItem);

// Remove multiple items from the end of an array
// This example uses the splice() method to remove the last 3 items from the fruits array.

const fruits = ['Apple', 'Banana', 'Cherry', 'Strawberry', 'Mango'];
const start = -3;
const removeItem = fruits.splice(start);
console.log(fruits);
console.log(removeItem);
