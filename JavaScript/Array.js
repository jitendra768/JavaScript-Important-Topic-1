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

const fruits = ['Apple', 'Banana'];
const fruitsString = fruits.join(',');
console.log(fruitsString);

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

// const fruits = ['Apple', 'Banana', 'Cherry', 'Strawberry', 'Mango'];
// const start = -3;
// const removeItem = fruits.splice(start);
// console.log(fruits);
// console.log(removeItem);


// Truncate an array down to just its first N items
// This example uses the splice() method to truncate the fruits array down to just its first 2 items.

// const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
// const start = 2;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItems);
// // ["Strawberry", "Mango", "Cherry"]


// Remove the first item from an array
// This example uses the shift() method to remove the first item from the fruits array.

// const fruits = ['Apple', 'Banana'];
// const removedItems = fruits.shift();
// console.log(fruits);
// console.log(removedItems);



// Remove multiple items from the beginning of an array
// This example uses the splice() method to remove the first 3 items from the fruits array.


// const fruits = ['Apple', 'Strawberry', 'Cherry', 'Banana', 'Mango'];
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// // ["Apple", "Strawberry", "Cherry"]


// Add a new first item to an array
// This example uses the unshift() method to add, at index 0, a new item to the fruits array — making it the new first item in the array.


// const fruits = ['Banana', 'Mango'];
// const addItem = fruits.unshift('Lemon');
// console.log(fruits);
// console.log(addItem);


// Remove a single item by index
// This example uses the splice() method to remove the string "Banana" from the fruits array — by specifying the index position of "Banana".

// const fruits = ['Banana', 'Mango','Cherry', 'Lemon'];
// const start = fruits.indexOf('Mango');
// const deleteCount = 1;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// console.log(removedItems);


// Remove multiple items by index
// This example uses the splice() method to remove the strings "Banana" and "Strawberry" from the fruits array — by specifying the index position of "Banana", along with a count of the number of total items to remove.

// const fruits = ['Apple', 'Banana', 'Strawberry', 'Mango'];
// const start = 1;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Apple", "Mango"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]


// Replace multiple items in an array
// This example uses the splice() method to replace the last 2 items in the fruits array with new items.


// const fruits = ['Apple', 'Banana', 'Strawberry'];
// const start = -2;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount, 'Mango', 'Cherry');
// console.log(fruits);
// // ["Apple", "Mango", "Cherry"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]


// Iterate over an array
// This example uses a for...of loop to iterate over the fruits array, logging each item to the console.

// const fruits = ['Mango', 'Cherry', 'Lemon','Apple'];
// for (const fruit of fruits){
//   console.log(fruit);
// };


// Call a function on each element in an array
// This example uses the forEach() method to call a function on each element in the fruits array; the function causes each item to be logged to the console, along with the item's index number.

// const fruits = ['Mango', 'Lemon', 'Orange', 'Apple'];
// fruits.forEach((item,index, array)=>{
//   console.log(index,item,array)
// })