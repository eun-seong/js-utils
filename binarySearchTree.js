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

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    const newNode = new Node(value);

    let cur = this.root;

    while (cur !== null) {
      if (cur.value < value) {
        if (cur.right === null) {
          cur.right = newNode;
          return;
        }
        cur = cur.right;
      } else {
        if (cur.left === null) {
          cur.left = newNode;
          return;
        }
        cur = cur.left;
      }
    }
  }

  remove(value) {
    const [nodeRemoving, parent] = this.findNode(value);
    if (nodeRemoving === null) {
      return;
    }

    let newChildNode = null;

    if (nodeRemoving.left && nodeRemoving.right) {
      const smallestNode = this.getSmallestNode(nodeRemoving);
      if (nodeRemoving.left === smallestNode) {
        nodeRemoving.left = null;
      } else {
        nodeRemoving.right = null;
      }

      smallestNode.left = nodeRemoving.left;
      smallestNode.right = nodeRemoving.right;
      newChildNode = smallestNode;
    } else if (nodeRemoving.left) {
      newChildNode = nodeRemoving.left;
    } else if (nodeRemoving.right) {
      newChildNode = nodeRemoving.right;
    }

    if (parent === null) {
      this.root = newChildNode;
    } else {
      if (parent.right === nodeRemoving) {
        parent.right = newChildNode;
      } else {
        parent.left = newChildNode;
      }
    }

    console.log("removed", value);
  }

  findNode(value) {
    let parent = null;
    let cur = this.root;

    while (cur !== null && cur.value !== value) {
      if (cur.value < value) {
        parent = cur;
        cur = cur.right;
      } else {
        parent = cur;
        cur = cur.left;
      }
    }

    const node = cur !== null && cur.value === value ? cur : null;

    return [node, parent];
  }

  getSmallestNode(node) {
    let cur = node;

    while (cur.left) {
      cur = cur.left;
    }

    return cur;
  }

  inorder(node) {
    const res = [];
    let cur = node || this.root;

    const travel = (node) => {
      if (node === null) return;

      if (node.left) {
        travel(node.left);
      }
      res.push(node.value);
      if (node.right) {
        travel(node.right);
      }
    };

    travel(cur);

    console.log("inorder", res.join(" "));
  }

  print() {
    console.log(this);
  }
}

const bst = new BinarySearchTree();

bst.add(3);
bst.add(6);
bst.add(1);
bst.add(4);
bst.add(12);
bst.add(34);
bst.add(9);

bst.inorder();

bst.remove(9);
bst.remove(6);
bst.remove(3);
bst.remove(12);
bst.remove(34);
bst.remove(1);
bst.remove(4);

bst.inorder();
