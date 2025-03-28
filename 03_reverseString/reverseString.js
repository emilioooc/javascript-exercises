const reverseString = function(text) {
    if (text === ''){
        return ''
    }else {
        let size = text.length
        let str = "";
        for(let i = 0 ; i < size ; i++){
         let wrd = text[text.length-1-i]
            str =str.concat(wrd)
        }
        return str;
    }
};

// Do not edit below this line
module.exports = reverseString;
