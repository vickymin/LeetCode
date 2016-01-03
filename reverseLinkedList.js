/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//recursively
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    var next = head.next;
    head.next = null;
    var root = reverseList(next);
    next.next = head;
    return root;
};
//iteratively
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    var next = head.next;
    head.next = null;
    while(next != null){
        var now = next.next;
        next.next = head;
        head = next;
        next = now;
    }
    return head;
};
