// Truncating String

var stringTruncate = function (str, length) {
    var dots = str.length > length ? '...' : '';
    return str.substring (0, length) + dots;
};

console.log(stringTruncate('Happiness is a key of good health', 5));