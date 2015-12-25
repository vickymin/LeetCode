//Given an array of integers, every element appears twice except for one. Find that single one.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0;
    for (var i=0; i<nums.length; i++) {
        result = result ^ nums[i];
    }

    return result;
};
