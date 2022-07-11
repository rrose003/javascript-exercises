const repeatString = function(text, number) { 
   for (i = 0; i < 1000; i++) {
    if(number > 0) {
        return text.repeat(number);
    } else if (number == 0 || text == ''){
        return '';
    } else if (number < 0){
        return 'ERROR';
    }
   }
};
repeatString('hey', 1)
// Do not edit below this line
module.exports = repeatString;
