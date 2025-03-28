/*
const repeatString = function (text, num) {
    if (num < 0){
        return "ERROR"
    }else {return text.repeat(num)}

};
module.exports = repeatString;
*/


const repeatString = function (text, num){
    let str = "";
    if (num < 0){
        return "ERROR"
    }else {
        for (let i = 0 ; i < num ; i++){
            str = str + text
        }
        return str;
    }
}; 

module.exports = repeatString;


