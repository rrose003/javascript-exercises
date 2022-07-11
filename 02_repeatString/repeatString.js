const repeatString = function() {
   let text = 'hey' 
   for (i = 0; i < 100; i++) {
    text += text.concat(text);
    return text;
   }
};

// Do not edit below this line
module.exports = repeatString;
