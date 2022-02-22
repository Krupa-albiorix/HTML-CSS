// Number to Array : 140 => [1,2,3,4,5,6...140]

var number = 140;
var arr = [];
for (let i = 1; i <= number; i++) {
    var num = i;
    var myarr = String(num).split(" ").map((num)=>{
        return Number(num)
    })
    arr.push(...myarr);
    // console.log(arr);
}
console.log(arr);
