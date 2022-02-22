// Get the property of the difference between two objects

const obj1 = {
    name : "Krupa Patel",
    id : "12342564756",
    isEmployed : true,
    age : 22,
    salary : 5000,
    job : "Angular Developer"
}

const obj2 = {
    name : "Krupa Patel",
    id : "12342564756",
    isEmployed : true,
    age : 23,
    salary : 500,
    job : "Angular Developer"
}

const difference = (obj1, obj2) => {
    let keyfound = [];
    Object.keys(obj1).forEach(key => {
        if(obj1[key] !== obj2[key]) {
            // return keyfound = key;        
            keyfound.push(key);   
        }
    });
    return keyfound || -1;
};
console.log(difference(obj1, obj2));