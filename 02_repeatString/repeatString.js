const repeatString = function(text, times) { 
   for (i = 0; i < 100; i++) {
    if(times > 0) {
        return text.repeat(times);
    } else {
        return '';
    }
   }
};
repeatString('hey', 1)
// Do not edit below this line
module.exports = repeatString;
