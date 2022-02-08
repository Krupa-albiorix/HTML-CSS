let num = 1;
try {
    num.toUpperCase();
}
catch(err) {
    console.log(err.name);
}