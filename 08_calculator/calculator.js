const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
  let sum;
	if (arr == []) {
    return 0;
  } else if (typeof(arr[0]) == 'number' && typeof(arr[1] == 'undefined')) {
    return arr;
  } else {
    for (i = 0; i < arr.length; i++) {
       sum += arr[i];
    }
    return sum;
  }
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
