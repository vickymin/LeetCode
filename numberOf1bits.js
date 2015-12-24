//Write a function that takes an unsigned integer and returns the number of ’1' bits it has.
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    while(n != 0){
        count = count + (n&1);
        n = n>>>1;
    }
    return count;
}
