//Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
//prove that at least one duplicate number must exist. Assume that there is only one duplicate number,
//find the duplicate one.
/** Note:
 * You must not modify the array (assume the array is read only).
 * You must use only constant, O(1) extra space.
 * Your runtime complexity should be less than O(n2).
 * There is only one duplicate number in the array, but it could be repeated more than once.
 *******************************************************************************************/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var len = nums.length;
    var min = 1;
    var max = len - 1;
    var mid, count;
    while(min < max){
        mid = Math.floor(min + (max - min) / 2);
        count = 0;
        for(var i = 0; i < len; i++){
            if(nums[i] <= mid){
                count++;
            }
        }
        if(count <= mid){
            min = mid + 1;
        }else{
            max = mid;
        }
    }
    return min;
};
