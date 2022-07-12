const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
  let sum = 0;

    for (i = 0; i < arr.length; i++) {
       sum += arr[i];
    }
    return sum;
};

const multiply = function(array) {
  let total = 1;

  for (i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
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
