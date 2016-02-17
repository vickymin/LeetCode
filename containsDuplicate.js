/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    nums.sort();
    for(var i=1; i<nums.length; i++){
        if(nums[i] == nums[i-1]){
            return true;
        }
    }
    return false;
};
