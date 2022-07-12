const ftoc = function(f) {
  let conversion = ((5/9)*(f - 32));
    return (Math.round(conversion * 10) / 10);
  
};

const ctof = function(c) {
  let conversion = (((9/5)*c) + 32);
  return (Math.round(conversion * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
