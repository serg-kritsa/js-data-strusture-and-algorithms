// https://github.com/trekhleb/javascript-algorithms

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverseV0(){
      var current = this.head;
      this.head = this.tail;
      // this.tail = current;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      return this;
    }
    ___reverseV0While(){
      var current = this.head;
      this.head = this.tail;
      // this.tail = current;
      var next;
      var prev = null;
      
      var i = 0;
      do {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i++;
      } while (i < this.length);
      return this;
    }
    reverseV1CleanCode(){
        function initLoopBuffer(passedThis, loopStruct) {
            loopStruct.prevNode = null,
            loopStruct.currentNode = passedThis.head,
            loopStruct.nextNode = null
        }
        function reverseHead(passedThis) {
            passedThis.head = passedThis.tail;
        }
        function saveNextNode(loopStruct) {
            loopStruct.nextNode = loopStruct.currentNode.next;
        }
        function swapCurrentNextAndPrevNode(loopStruct) {
            loopStruct.currentNode.next = loopStruct.prevNode;
        }
        function prepareNextIteration(loopStruct) {
            loopStruct.prevNode = loopStruct.currentNode; 
            loopStruct.currentNode = loopStruct.nextNode;
        }

        var loopBuffer = {};
        initLoopBuffer(this, loopBuffer);
        reverseHead(this);
        
        for (var i = 0; i < this.length; i++) {
            saveNextNode(loopBuffer);
            swapCurrentNextAndPrevNode(loopBuffer);
            prepareNextIteration(loopBuffer);
        }
        return this;
    }
    reverse(){
      var nextNodeSavedForLoop;
      var prevNodeSavedForLoop = null;
      var currentNodeSavedForLoop = this.head;
      this.head = this.tail;
      for(var i = 0; i < this.length; i++){
        nextNodeSavedForLoop = currentNodeSavedForLoop.next;
        currentNodeSavedForLoop.next = prevNodeSavedForLoop; // change next of currentNodeSavedForLoop

        // update for next iteration 
        prevNodeSavedForLoop = currentNodeSavedForLoop; 
        currentNodeSavedForLoop = nextNodeSavedForLoop;
      }
      return this;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
list.print()
list.reverse()
list.print()








