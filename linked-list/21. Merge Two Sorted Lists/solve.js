//Input: list1 = [1,2,4], list2 = [1,3,4]
//Output: [1,1,2,3,4,4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }

    append(value){
        let newNode = new ListNode(value);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    printList(){
        let current = this.head;
        let result = ""
        while(current){
            result+=current.value+'->'
            current = current.next;
        }
        console.log(result+'null');
    }
    delete(value){

        if(!this.head) {
            console.log("List is empty");
        }

        if(this.head.value === value){
            this.head = this.head.next;
            return;
        }

        let prev = null;
        let current = this.head;

        while(current && current.value !== value){
            prev = current;
            current = current.next;
        }

        if(!current){
            console.log("Value not found");
            return;
        }
        prev.next = current.next;
    }

}
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    let p1 = list1;
    let p2 = list2;

    while(p1 !== null && p2 !== null){
        if(p1.value <= p2.value){
            current.next = p1;
            p1 = p1.next;
        }else{
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }
    if(p1 !== null) current.next = p1;
    if(p2 !== null) current.next = p2;
    return dummyHead.next;
};
mergeTwoLists([1,2,4],[1,3,4])