// Map, set, weakset, wealmap
// Set

// let myArray = [1,2,3,4]
// let obj = new Set(myArray);
// obj.add(5);

// obj.delete(5);
// console.log(obj);

// var obj1 = {name: 'ajay'}
// obj.add(obj1);
// console.log(obj);
// console.log(obj.has(2));

// for(let new1 of obj){
//     console.log(new1);
// }

// obj.forEach((element)=>{
//     console.log(element);
// })

// map ---key and value form me

let myMap = new Map([
  ['a1', 'Ajay'],
  ['a2', 'vikash'],
]);
// myMap.delete('a2');
myMap.get('a1');
// console.log(myMap.get('a1'));
console.log(myMap);

// WeakSet me only store object and add object and delete but can not iterate value in weakset

let ws = new WeakSet();

var ob1 = { name: 'Amit' };
var ob2 = { name: 'Sakshi' };
ws.add(ob1);
ws.add(ob2);
console.log(ws);

//weakmap same as weakset store only object and delete set get has perform but can not iterate value

let wm = new WeakMap();
var ob3 = { name: 'Sachin' };
var ob4 = {};
wm.set(ob3, 'Private');
wm.set(ob4, 'Private Data');
console.log(wm);
