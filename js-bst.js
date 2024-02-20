class Node {
    constructor(data, left, right, parent) {
        this.parent = parent ? parent : null;
        this.data = data;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}

class  BSTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = new Node(data);

        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }

    }

    insertNode(root, node) {
        if (root.data > node.data) {
            if (root.left == null) {
                root.left = node;
                node.parent = root;
            }
            else this.insertNode(root.left, node)

        } else if (root.data < node.data) {
            if (root.right == null) {
                root.right = node;
                node.parent = root;
            }
            else this.insertNode(root.right, node);
        }
    }

    search(val, root = this.root) {
        if(!root) return
        else if(val < root.data) return this.search(val, root.left)
        else if(val > root.data) return this.search(val, root.right)
        else return true
    }

    getMin(root = this.root) {
        if (!root) return null
        if (root.left === null) return root.data
        else return this.getMin(root.left)
    }

    getMax(root = this.root) {
        if (!root) return null
        if (root.right === null) return root.data
        else return this.getMax(root.right)
    }

    clear() {
        this.root = null;
    }
}