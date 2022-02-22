// Chop a String into chunks

let myarr = "JavaScript is case-sensitive language";

function stringtochunk(arr,len) {
    var chunk = [], i = 0, n = arr.length;
    while(i < n) {
        chunk.push(arr.slice(i, i+= len));
    }
    return chunk;
}
console.log(stringtochunk(myarr,6));