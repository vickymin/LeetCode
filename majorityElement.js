//Given an array of size n, find the majority element
//The majority element is the element that appears more than ⌊ n/2 ⌋ times
//You may assume that the array is non-empty and the majority element always exist in the array
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    var middle = Math.floor(nums.length/2);
    if(nums[0] == nums[middle]){
        return nums[0];
    }
    return nums[middle];
};

//O(n) answer
var majorityElement = function(nums) {
    var maj = nums[0];
    var count = 1;
    for(var i=1; i<nums.length; i++){
        if(count === 0){
            count++;
            maj = nums[i];
        }else if(maj == nums[i]){
            count++;
        }else{
            count--;
        }
    }
    return maj;
};
