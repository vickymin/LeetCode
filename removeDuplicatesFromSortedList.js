//Given a sorted linked list, delete all duplicates such that each element appear only once.
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
 var deleteDuplicates = function(head) {
     if(head == null || head.next == null){
         return head;
     }
     var a = head;
     while(a.next != null){
         if(a.val == a.next.val){
             a.next = a.next.next;
         }else{
             a = a.next;
         }
     }
     return head;
 };
//recursive
var deleteDuplicates = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    head.next = deleteDuplicates(head.next);
    if(head.val == head.next.val){
        return head.next
    }
    return head;
};
