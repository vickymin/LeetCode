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
var swapPairs = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    var first = head;
    var second = head.next;
    first.next = swapPairs(second.next);
    second.next = first;
    return second;
};
