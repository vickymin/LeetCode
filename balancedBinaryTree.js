/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//recursive
var isBalanced = function(root) {
    if(root == null){
        return true;
    }
    var left = depth(root.left);
    var right = depth(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
var depth = function(node) {
    if(node == null){
        return 0;
    }
    return Math.max(depth(node.left), depth(node.right)) + 1;
}
//DFS
var isBalanced = function(root) {
    if(root == null){
        return true;
    }
    return depth(root) != -1;
};
var depth = function(node) {
    if(node == null){
        return 0;
    }
    var left = depth(node.left);
    var right = depth(node.right);
    if(left == -1 || right == -1 || Math.abs(left - right) > 1){
        return -1;
    }
    return Math.max(left, right) + 1;
}
