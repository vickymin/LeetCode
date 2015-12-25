//Given a binary tree, return the preorder traversal of its nodes' values
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
//recursive
var preorderTraversal = function(root) {
   var arr = [];
   _h(root, arr);
   return arr;
}
var _h = function(root, arr) {
   if (root == null) {
       return;
   }
   arr.push(root.val);
   _h(root.left, arr);
   _h(root.right, arr);
   return;
}
//iterative
