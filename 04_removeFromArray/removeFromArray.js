const removeFromArray = function(arr, ...valuesToRemove) {
    return arr.filter(item => !valuesToRemove.some(val => val === item));
};

// Do not edit below this line
module.exports = removeFromArray;
