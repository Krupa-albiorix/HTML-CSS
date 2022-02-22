// Searching / Filtering

const fruits = ["Banana", "Kiwi", "Orange", "Apple", "Pinapple", "Apple"];
let first = fruits[0];
console.log(first);
let index = fruits.indexOf("Kiwi");
console.log(index);
let search = fruits.lastIndexOf("Apple");
console.log(search);

const x = [2,4,6,3,6,8,76,45,23,54];
const result = x.filter(a => a >= 40);
console.log(result);