// The JavaScript for in statement loops through the properties of an Object
var person = {fname:"John", lname:"Doe", age:25};

var x;
for (let x in person) {
    console.log(x);
}