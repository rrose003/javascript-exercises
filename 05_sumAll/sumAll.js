const sumAll = function(min, max) {
    let lower;
    let upper;
    if (min > 0 && max > 0) {
        if (min < max) {
            lower = min;
            upper = max;
        } else {
            lower = max;
            upper = min;
        }
    } else {
        return 'ERROR';
    }
    return ((upper*(upper+1) - ((lower-1)*lower)) / 2);
};

// Do not edit below this line
module.exports = sumAll;
