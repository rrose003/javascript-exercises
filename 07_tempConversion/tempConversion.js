const ftoc = function(f) {
  let celsius = ((5/9)*(f - 32));
    return (Math.round(celsius * 10) / 10);
  
};

const ctof = function(c) {
  let fahrenheit = (((9/5)*c) + 32);
  return (Math.round(fahrenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
