class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode); 
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    bstValidation() {
        return this.isValid(this.root, -Infinity, Infinity);
    }

    isValid(node, min, max) {
        if (!node) {
            return true;
        }
        if (node.value < min || node.value > max) {
            return false;
        }
        return this.isValid(node.left, min, node.value) && this.isValid(node.right, node.value, max);
    }

    closest(value) {
        return this.findClosest(this.root, value, Infinity);
    }

    findClosest(node, target, closest) {
        if (!node) {
            return null;
        }
        if (Math.abs(node.value - target) < closest) {
            closest = node.value;
        }
        if (target < node.value) {
            return this.findClosest(node.left, target, closest);
        } else if (target > node.value) {
            return this.findClosest(node.right, target, closest);
        } else {
            return closest;
        }
    }
}

const bst = new BinarySearchTree();
console.log("tree is empty?", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Search 10:", bst.search(bst.root, 10));
console.log("Search 5:", bst.search(bst.root, 5));
console.log("Search 15:", bst.search(bst.root, 15));
console.log("Search 20:", bst.search(bst.root, 20));

console.log("PreOrder:");
bst.preOrder(bst.root);
console.log("InOrder:");
bst.inOrder(bst.root);
console.log("PostOrder:");
bst.postOrder(bst.root);
console.log("LevelOrder:");
bst.levelOrder();

console.log("Min:", bst.min(bst.root));
console.log("Max:", bst.max(bst.root));

console.log("Deleting 5:");
bst.delete(5);
bst.inOrder(bst.root);

console.log("Is BST Valid?", bst.bstValidation());

console.log("Closest to 12:", bst.closest(12));
