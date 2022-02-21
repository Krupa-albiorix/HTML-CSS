var number = 140;

for (let i = 1; i <= number; i++) {
    var num = i;
    var myarr = String(num).split(" ").map((num)=>{
        return Number(num)
    })
    // var myarr1 = myarr.concat(myarr.length+1);
    console.log(myarr);
}

// for (let i = 1; i <= number; i++) {
//     var num = i.concat(i+1);
//     console.log(num);
// }