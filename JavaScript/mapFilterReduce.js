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
console.log(res);

// ------------Filter method-------------

const number = [5,6,7,8,4];

const result = number.filter((y)=>{
  return y % 2 ===0;
});
console.log(result);
