/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    //create sentinel node
    //store prev
    //loop through and check if the prev.next.value == val
    //if true then remove it.
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return sentinel.next;   
};