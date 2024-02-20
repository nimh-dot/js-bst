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
        if(!root) return null
        else if(val < root.data) return this.search(val, root.left)
        else if(val > root.data) return this.search(val, root.right)
        else return root
    }

    getMin(root = this.root) {
        if (!root) return null
        if (root.left === null) return root
        else return this.getMin(root.left)
    }

    getMax(root = this.root) {
        if (!root) return null
        if (root.right === null) return root
        else return this.getMax(root.right)
    }

    remove(val) {
        let nodeToRemove = this.search(val);
        if (!nodeToRemove) throw new Error('The value is not in the tree')
        // case 1: node to remove has two children
        if (nodeToRemove.left && nodeToRemove.right) {
            let minRight = this.getMin(nodeToRemove.right)
            nodeToRemove.data = minRight.data;
            if (minRight.right) minRight.right.parent = minRight.parent;

            if (minRight.parent.left == minRight) {
                minRight.parent.left = minRight.right;
            } else {
                minRight.parent.right = minRight.right;
            }
        }
        // case 2: node to remove has one child
        else if (nodeToRemove.left || nodeToRemove.right) {
            let child = nodeToRemove.left || nodeToRemove.right;
            child.parent = nodeToRemove.parent;
            if (nodeToRemove.parent.left == nodeToRemove) {
                nodeToRemove.parent.left = child;
            } else {
                nodeToRemove.parent.right = child;
            }

        // case 3: node to remove doesn't have any children
        } else {
            if (nodeToRemove.parent.left == nodeToRemove) {
                nodeToRemove.parent.left = null;
            } else {
                nodeToRemove.parent.right = null;
            }
        }
    }

    clear() {
        this.root = null;
    }
}