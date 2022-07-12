const removeFromArray = function(arr, value, value2, value3, value4) {
    var i = 0;
    while (i < arr.length) {
        if(arr[i] === value || arr[i] === value2 || arr[i] === value3 || arr[i] === value4) {
            arr.splice(i, 1)
        } else {
            ++i;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
