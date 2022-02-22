// Replace key value

const obj = {
    job : "Programer", 
    name : "Krupa"
};
obj.designation = "Programer";
console.log(obj);

delete obj.job;
console.log("Final Object is : ",obj);