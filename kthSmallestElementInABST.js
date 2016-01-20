//Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var left = countNode(root.left);
    if(left == k - 1){
        return root.val;
    }else if(left < k - 1){
        return kthSmallest(root.right, k - left - 1);
    }else{
        return kthSmallest(root.left, k);
    }
};

var countNode = function(node) {
    if(node == null){
        return 0;
    }
    return 1 + countNode(node.left) + countNode(node.right);
}
