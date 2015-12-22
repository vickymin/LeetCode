//Given a binary tree, return the preorder traversal of its nodes' values.
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
    var pre = function(node){
        if(node !== null){
          arr.push(node.val);
          arr.concat(pre(node.left));
          arr.concat(pre(node.right));
        }
    };
    pre(root);
    return arr;
};
//iterative
