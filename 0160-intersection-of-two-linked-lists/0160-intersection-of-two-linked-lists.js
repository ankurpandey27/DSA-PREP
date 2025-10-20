/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    //make a set and store the headB
    let myHeadB = new Set();
    while(headB){
        myHeadB.add(headB);
        headB = headB.next;
    }
    //check if the element of headA is exist in headB then return
    
    while(headA){
        if(myHeadB.has(headA)) return headA;
        headA = headA.next;
    }

    return null;
};