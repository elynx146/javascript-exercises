const reverseString = function(word){
    let newstring;
    newstring = ""
    for (i=word.length;i>=0;i--){
        newstring += word.charAt(i);
    }
    return newstring;
};

// Do not edit below this line
module.exports = reverseString;
