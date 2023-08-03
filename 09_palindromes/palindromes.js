const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z|\d]/g, "");
    return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
