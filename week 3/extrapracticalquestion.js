
// function check if two bst forms a mirror image


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function areMirror(root1, root2) {
    if (!root1 && !root2) {
        return true; // Both trees are empty, so they are mirror images
    }
    
    if (!root1 || !root2) {
        return false; // One tree is empty while the other is not, so they can't be mirror images
    }

    // Compare values of current nodes
    if (root1.value !== root2.value) {
        return false;
    }

    // Recursively check subtrees by comparing left subtree of one with the right subtree of the other
    // and vice versa
    return areMirror(root1.left, root2.right) && areMirror(root1.right, root2.left);
}

// Example usage:
// Constructing two binary search trees
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);

const root2 = new TreeNode(1);
root2.left = new TreeNode(3);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(5);
root2.right.right = new TreeNode(4);

// Check if the two BSTs are mirror images
console.log(areMirror(root1, root2)); // Output: true
