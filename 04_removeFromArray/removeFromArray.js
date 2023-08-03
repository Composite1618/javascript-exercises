const removeFromArray = function (input, ...items) {
    items.forEach((item) => {
        if (input.indexOf(item) > -1) {
            input.splice(input.indexOf(item), 1);
        }
    });
    return input;
};


// Do not edit below this line
module.exports = removeFromArray;
