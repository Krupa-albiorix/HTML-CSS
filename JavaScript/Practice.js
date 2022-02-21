// const a = ["Saab", "Volvo", "BMW"];
// console.log("Print A:", a);
// const b = [];
// b[0] = "Krishna";
// b[1] = "Nishant";
// b[2] = "Krupa";
// b[3] = "Neeshi";
// console.log("Print B:", b.length);
// console.log(a.toString());

// for (var i = 0; i < b.length; i++) {
//     console.log(b[i]);
// }

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log("Object is:",person["city"]);
// for (let x in person) {
//     console.log(x);
// }
const i=1,x=0;
const J = [{name:"j1", Id:"1"},
        {name:"j2", Id:"2"},
        {name:"j2", Id:"3"}];
console.log(J);
const final = J.find(J => J.name=="j2");
console.log("final",final);

// const jobs = [
//     {id:1, isActive:true},
//     {id:2, isActive:true},
//     {id:3, isActive:false},
// ];
// const activeJobs = jobs.filter(function(jobs){return jobs.isActive;});
// console.log(activeJobs);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits.copyWithin(2, 0));