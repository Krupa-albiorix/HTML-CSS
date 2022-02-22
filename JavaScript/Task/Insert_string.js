// Insert string at specific location

let str1 = "Music is good for happiness...";

let result = str1.replace('happiness','hart');

console.log(result);

let str = "Music is good for happiness...";

str = str.split('');
str.splice(5, 0, " Hello");
newstr = str.join('');
console.log(newstr);