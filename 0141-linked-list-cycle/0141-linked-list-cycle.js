/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visitedNode = new Set();
    let curr = head;
    while(curr){
        if(visitedNode.has(curr)){
            return true
        }
        visitedNode.add(curr)
        curr = curr.next;
    }
    return false;
};