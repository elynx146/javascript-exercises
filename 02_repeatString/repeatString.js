let string1

const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    string1 = ""
    for(i = 0;i<num;i++){
        string1 += string;
    }
    return string1;
};


// Do not edit below this line
module.exports = repeatString;
