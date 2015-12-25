//Given a binary tree, return the inorder traversal of its nodes' values
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var arr = [];
    _h(root, arr);
    return arr;
};
var _h = function(root, arr){
    if(root == null){
        return;
    }
    _h(root.left, arr);
    arr.push(root.val);
    _h(root.right, arr);
};
