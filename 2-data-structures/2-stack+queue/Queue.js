class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// // Big O of Queues
// Insertion   - O(1)
// Removal     - O(1)

// First I F O
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){ // add in end  
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){ // remove from beginning // the same way as in stack
        if (!this.first) return null;

        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();
q.enqueue("First"); // 1
q.enqueue("Second"); // 2
q.enqueue("Third"); // 3
q.dequeue(); // First