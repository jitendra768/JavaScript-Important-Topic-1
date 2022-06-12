// Map HashTable

const urls = new Map(); //create a empty map
urls.set('development', 'dev.example.com'); //fill map
urls.set('production', 'prod.example.com');
console.log(urls);
console.log(urls.get('production')); //for accesing element
