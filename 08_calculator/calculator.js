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

const power = function(value, power) {
	return (Math.pow(value, power));
};

const factorial = function(num) {
	if (num < 0) {
    return -1;
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    for (i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
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
