const fruits = ["Banana", "Orange", "Apple", "Mango"];

let str = fruits.toString();
console.log("Fruits in string: ", str);
console.log("Type os Fruits: ", typeof(str));
fruits.pop();
fruits.push("Kiwi");
delete fruits[0];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log("Join array with *: ", fruits.join(" * "));

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log("My childern: ", myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const mydemo = arr1.concat(arr2, arr3);
console.log("My demo: ", mydemo);