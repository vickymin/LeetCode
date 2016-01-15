//Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
/**
 * @param {number[]} nums
 * @return {number}
 */
//dynamic programminig
var maxSubArray = function(nums) {
    var len = nums.length;
    if(len == 1){
        return nums[0];
    }
    var array = [];
    array[0] = nums[0];
    var max = array[0];
    for(var i = 1; i < len; i++){
        if(array[i-1] < 0){
            array[i] = nums[i];
        }else{
            array[i] = array[i-1] + nums[i];
        }
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
};
