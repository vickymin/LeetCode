//Given an array of integers, every element appears three times except for one. Find that single one.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();
    for(var i = 0; i < nums.length; i++){
        if(nums[i] != nums[i-1] && nums[i] != nums[i+1]){
            return nums[i];
        }
    }
};
//bit manipulation
var singleNumber = function(nums) {
     var one = 0, two = 0, three = 0;
     for(var i = 0; i < nums.length; i++){
         two |= one & nums[i];
         one ^= nums[i];
         three = one & two;
         one &= ~three;
         two &= ~three;
     }
     return one;
};
