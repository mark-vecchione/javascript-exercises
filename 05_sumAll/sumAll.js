const sumAll = function(start, stop) {
    // Check for invalid inputs
    if (typeof start !== "number" || typeof stop !== "number") {
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(stop)) {
        return "ERROR";
    }
    if (start < 0 || stop < 0) {
        return "ERROR";
    }

    let result = 0;

    // Ensure start and stop are in the correct order
    if (stop >= start) {
        for (let i = start; i <= stop; i++) {
            result += i;
        }
    } else {
        for (let i = stop; i <= start; i++) {
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
