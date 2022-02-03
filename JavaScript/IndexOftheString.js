var str = "Krishna";
console.log("Our String is: " + str);
console.log("1st character of String: " + str[0]);
console.log("4st character of String: " + str[3]);

//To find the last character
console.log("Last character of String: " + str[str.length - 1]);

//To find the 3rd last character
console.log("3rd last character of the String: " + str[str.length - 3]);

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log("Part: " + part);

let part1 = str.substring(7, 13);
console.log("Part1: " + part1);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log("NewText: " + newText);