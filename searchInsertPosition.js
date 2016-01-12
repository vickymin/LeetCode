//Given a sorted array and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.
//You may assume no duplicates in the array.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var min = 0;
    var max = nums.length - 1;
    var guess;
    while(min <= max){
        guess = Math.floor(min + (max-min)/2);
        if(nums[guess] == target){
            return guess;
        }else if(nums[guess] < target){
            min = guess + 1;
        }else{
            max = guess - 1;
        }
    }
    return min;
};
