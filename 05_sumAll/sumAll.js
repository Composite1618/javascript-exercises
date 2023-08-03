const sumAll = function (inputa, inputb) {
    if (!Number.isInteger(inputa) || !Number.isInteger(inputb)) {
        return "ERROR";
    }
    let max_num = Math.max(inputa, inputb);
    let min_num = Math.min(inputa, inputb);
    if (min_num < 0) {
        return "ERROR";
    }
    return (2 * min_num + max_num - 1) * max_num / 2;
};

// Do not edit below this line
module.exports = sumAll;
