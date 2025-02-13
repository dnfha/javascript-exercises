const reverseString = function (aString) {
    let newString = '';
    for (let i = aString.length - 1; i >= 0; i--) {
        newString += aString[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
