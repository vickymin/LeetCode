//Suppose a sorted array is rotated at some pivot unknown to you beforehand.
//(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//Find the minimum element.
//You may assume no duplicate exists in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length == 0) {
        return 0;
    }
    if(nums.length == 1) {
        return nums[0];
    }
    var start = 0;
    var end = nums.length - 1;
    var guess;
    while(start <= end) {
        guess = Math.floor((start + end) / 2);
        if(nums[guess] <= nums[guess-1]){
            return nums[guess];
        }else if(nums[guess] > nums[end]){
            start = guess + 1;
        }else{
            end = guess - 1;
        }
    }
    return nums[start];
};
