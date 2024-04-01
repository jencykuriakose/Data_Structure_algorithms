class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(index, value) {
        if (index < 0 || index > this.size) {
            return;
        }
        const node = new Node(value);
        if (index === 0) {
            this.prepend(value);
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.size--;
        return current.value;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.append(40);
list.append(50);

list.insert(2, 3000);

list.removeAt(2);

list.printList();
