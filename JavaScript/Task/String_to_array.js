// Coma Seprated String to Array

var str = "a,b,c,d";
let myarray = str.split(",");
let myarray1 = [...str];
let myarray2 = Array.from(str);
console.log("Array is:",myarray);
console.log("Array is:",myarray1);
console.log("Array is:",myarray2);