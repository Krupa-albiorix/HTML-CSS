// this keyword refers to an object.

const person = {
    firstName: "Krupa",
    lastName : "Patel",
    id       : 56,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log("Full name of person is :", person.fullName());

"use strict";
let x = this;

function myFunction() {
    return this;
}
 
// Explicite function binding using call() method
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const person2 = {
    firstName:"John",
    lastName: "Doe",
}
console.log(person1.fullName.call(person2));

// Explicite function binding using bind() method
const person3 = {
    firstName:"Neeshi",
    lastName: "Patel",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const member = {
    firstName:"Nishant",
    lastName: "Patel",
}
let fullName = person3.fullName.bind(member);
console.log(fullName());