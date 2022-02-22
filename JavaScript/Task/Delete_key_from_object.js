// Delete key from Object

const obj1 = {
    name : "Krupa Patel",
    id : "12342564756",
    isEmployed : true,
    age : 22,
    salary : 5000,
    job : "Angular Developer"
}

console.log("Before deletion:", obj1);

delete obj1.id;
delete obj1.isEmployed;
console.log("After deletion:", obj1);