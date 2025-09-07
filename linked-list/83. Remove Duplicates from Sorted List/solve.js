
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let head = [1,1,2,3,3];
var deleteDuplicates = function(head) {
    if (!head) return null;
    const seen = new Set();
    let current = head;
    let prev = null;

    while (current) {
        if (seen.has(current.val)) {
            prev.next = current.next; 
        }else {
            seen.add(current.val);
            prev = current;
        }
        current = current.next;
    }
    return head;
};