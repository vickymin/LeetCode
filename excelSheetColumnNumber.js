//Given a column title as appear in an Excel sheet, return its corresponding column number.
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var sum = 0;
    var len = s.length-1;
    var base = 1;
    for(var j= len; j>=0; j--){
        sum = sum + (s.charCodeAt(j)-64)*base;
        base = base*26;
    }
    return sum;
};
