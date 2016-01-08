//Given an array of numbers nums, in which exactly two elements appear only once
//and all the other elements appear exactly twice.
//Find the two elements that appear only once.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort();
    var result = [];
    for(var i = 0; i < nums.length; i++){
       if (nums[i] != nums[i-1] && nums[i] != nums[i+1]) {
           result.push(nums[i]);
       }
    }
    return result;
};
//bit manipulation
var singleNumber = function(nums) {
    var diff = 0;
    for(var i = 0; i < nums.length; i++){
        diff ^= nums[i];
    }
    diff &= -diff;
    var res = [0, 0];
    for(var j = 0; j < nums.length; j++){
        if((nums[j] & diff) == 0){
            res[0] ^= nums[j];
        }else{
            res[1] ^= nums[j];
        }
    }
    return res;
};
