// Check String is in which case?

function checkCase(str) {
    if (!isNaN(str * 1)) {
        return "Numeric value";
    }
    else if (str == str.toUpperCase()) {
        return "upper case";
    }
    else if (str == str.toLowerCase()) {
        return "lower case";
    }
}

console.log(checkCase("hello"));
console.log(checkCase("WORLD"));
console.log(checkCase("2"));