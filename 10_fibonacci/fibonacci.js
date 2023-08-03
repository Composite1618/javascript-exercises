let memo = {};

const fibonacci = function(input) {
    input = parseInt(input);
    if (input < 0) return "OOPS";
    if (input == 0) return 0;
    if (input == 1) return 1;
    if (memo[input]) return memo[input];
    return fibonacci(input - 1) + fibonacci(input - 2);
};

// Do not edit below this line
module.exports = fibonacci;
