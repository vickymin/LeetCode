//Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length == 0){
        return null;
    }
    var mid = Math.floor(nums.length/2);
    var head = new TreeNode(nums[mid]);
    head.left = sortedArrayToBST(nums.slice(0, mid));
    head.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
    return head;
};
