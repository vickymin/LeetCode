//Given an integer, write a function to determine if it is a power of three.
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n == 0){
        return false;
    }else{
        return n == Math.pow(3, Math.round(Math.log(n)/Math.log(3)));
    }
};
