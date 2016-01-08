//Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters.
//You may assume that each word will contain only lower case letters. If no such two words exist, return 0.
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    var max = 0;
    var len = words.length;
    var array = [];
    for(var k = 0; k < len; k++){
        array[k] = _h(words[k]);
    }
    for(var i = 0; i < len; i++){
        for(var j = 0; j < len; j++){
            if(i != j && !ifSame(array[i], array[j])){
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};
//将单词转为二进制数
var _h = function(w) {
    var res = 0;
    var aa = "a".charCodeAt();
    for(var i = 0; i < w.length; i++){
        res |= Math.pow(2, w[i].charCodeAt() - aa);
    }
    return res;
}
//比较两个单词是否有重复的字母
var ifSame = function(w1, w2){
    if((w1 & w2) === 0){
        return false;
    }
    return true;
}
