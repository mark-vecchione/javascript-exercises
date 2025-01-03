const calculateAges = function(people) {
    const currentYear = new Date().getFullYear();
    return people.map(person => {
        const age = person.yearOfDeath
            ? person.yearOfDeath - person.yearOfBirth
            : currentYear - person.yearOfBirth;
        return {
            name: person.name,
            age: age
        };
    });
};


const findTheOldest = function(people) {
    const poeplesAges = calculateAges(people);
    return poeplesAges.reduce((oldest, person) => {
        return person.age > oldest.age ? person: oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
