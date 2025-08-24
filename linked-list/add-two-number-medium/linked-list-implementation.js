class ListNode{
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
    addTwoNumbers

}
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.delete(2);
list.printList();