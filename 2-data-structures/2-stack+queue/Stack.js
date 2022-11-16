class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// // Big O of Stacks
// Insertion   - O(1)
// Removal     - O(1)

// Last I F O
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){ // add to beginning 
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){ // remove from beginning 
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stack = new Stack();
stack.push("First"); // 1
stack.push("Second"); // 2
stack.push("Third"); // 3

stack.pop(); // Third
