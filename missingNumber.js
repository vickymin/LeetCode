//Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
//find the one that is missing from the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var count = 0;
    for(var i=0; i<nums.length;i++){
        count = count ^ (i+1) ^ nums[i];
    }
    return count;
};
