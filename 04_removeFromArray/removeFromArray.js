const removeFromArray = function(arr, item, index) {
    for (i = 0; i < arr.length; i++) {
        if (arr.includes(item)[index]) {
            arr.splice(item, i);
            i--;
        } else {
            return arr;
        }
    } 
};

// Do not edit below this line
module.exports = removeFromArray;
