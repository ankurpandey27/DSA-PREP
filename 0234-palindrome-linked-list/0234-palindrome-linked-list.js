/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    // find mid elem
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse from mid to end
    let prev = null;
    let curr = slow;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    //compare and check if both list is polindrom.

    let firstList = head;
    let secondList = prev;

    while(secondList){
        if(firstList.val != secondList.val){
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next
    }
    return true; 
};