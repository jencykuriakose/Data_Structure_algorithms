class queue{
    constructor(){
        this.item=[];
    }
    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
        return this.item.shift()
    }
    isEmpty(){
        return this.item.length===0;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.item[0];
        }
        return null;
    
    }
    size(){
        return this.item.length
    }
    print(){
        console.log(this.item.toLocaleString());
    }
}
const q = new queue();

// Enqueue some values
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

// Print the queue
q.print();

// Dequeue an item
console.log("Dequeued item:", q.dequeue());

// Print the queue after dequeue
q.print();

// Peek at the front item
console.log("Front item:", q.peek());

// Check if the queue is empty
console.log("Is queue empty?", q.isEmpty());

// Get the size of the queue
console.log("Queue size:", q.size());
