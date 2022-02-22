// Convert object to key value pair

const obj = {
    1 : "First",
    job : "Programer", 
    name : "Krupa"
};

let data = Object.keys(obj).map((keys) => [(keys), obj[keys]]);
console.log(data);