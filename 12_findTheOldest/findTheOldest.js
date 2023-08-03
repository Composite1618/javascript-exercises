const currentYear = 2023;
const findTheOldest = function(array) {
    let ages = array.map((person) => {
        if (person.yearOfDeath)
            return person.yearOfDeath - person.yearOfBirth;
        else
            return currentYear - person.yearOfBirth;
    })
    let idx = ages.indexOf(Math.max(...ages));
    return array[idx];
};

// Do not edit below this line
module.exports = findTheOldest;
