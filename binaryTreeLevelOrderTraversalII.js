//Given a binary tree, return the bottom-up level order traversal of its nodes values.
//(ie, from left to right, level by level from leaf to root).
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root == null){
        return [];
    }
    var res = [];
    var queue = [root];
    var cur, count, sub;
    while(queue.length > 0) {
        count = [];
        sub = [];
        while(queue.length > 0) {
            cur = queue.shift();
            sub.push(cur.val)
            if(cur.left != null) {
                count.push(cur.left);
            }
            if(cur.right != null) {
                count.push(cur.right);
            }
        }
        res.unshift(sub);
        queue = count;
    }
    return res;
};
