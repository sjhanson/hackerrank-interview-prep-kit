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

    insert(value) {
        this.root = this.insertRec(this.root, value);
    }

    insertRec(root, value) {
        if (!root) {
            root = new Node(value);
        } else if (value > root.value) {
            root.right = this.insertRec(root.right, value);
        } else if (value < root.value) {
            root.left = this.insertRec(root.left, value);
        }

        return root;
    }
}

module.exports = {
    BinarySearchTree
}