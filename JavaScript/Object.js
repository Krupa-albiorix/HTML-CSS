// Create an object:
const person = {
    firstName: "Krupa",
    lastName: "Patel",
    age: 22,
    eyeColor: "black",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName + " is " + person["age"] + " years old.");
console.log(person["fullName"]);