const obj = {
    job : "Programer", 
    name : "Krupa"
};
obj.designer = "Programer";
console.log(obj);

delete obj.job;
console.log("Final Object is : ",obj);