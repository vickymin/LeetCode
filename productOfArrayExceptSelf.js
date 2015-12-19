//Given an array of n integers where n > 1, nums, return an array output
//such that output[i] is equal to the product of all the elements of nums except nums[i].
//Solve it without division and in O(n).
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    var newNums = [];
    newNums[0] = 1;
    for(var i = 1; i < len; i++){
        newNums[i] = newNums[i-1] * nums[i-1];
    }
    var right = 1;
    for(var j = len - 1; j >= 0; j--){
        newNums[j] *= right;
        right *= nums[j];
    }
    return newNums;
};
