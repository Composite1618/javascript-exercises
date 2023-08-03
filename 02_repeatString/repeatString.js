const repeatString = function(string, num) {
    let retval = '';
    if (num < 0)
        return "ERROR";
    for (let index = 0; index < num; index++) {
        retval += string;
    }
    return retval;
};

// Do not edit below this line
module.exports = repeatString;
