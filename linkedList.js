class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let cur = this.head;
    const newNode = new Node(value);

    if (cur === null) {
      this.head = newNode;
      return;
    }

    while (cur.next !== null) {
      cur = cur.next;
    }

    cur.next = newNode;
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
      return;
    }

    let cur = this.head;

    while (cur !== null) {
      if (cur.next === node) break;
      cur = cur.next;
    }

    if (cur === null) return null;

    cur.next = node.next;
    node.next = null;
  }

  find(value) {
    let cur = this.head;

    while (cur !== null) {
      if (cur.value === value) {
        return cur;
      }
      cur = cur.next;
    }

    return null;
  }

  sort() {
    const getMiddle = (head) => {
      let slow = head,
        fast = head;

      while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }

      return slow;
    };

    const sortedMerge = (a, b) => {
      let result = null;

      if (a === null) {
        return b;
      }
      if (b === null) {
        return a;
      }

      if (a.value < b.value) {
        result = a;
        result.next = sortedMerge(a.next, b);
      } else {
        result = b;
        result.next = sortedMerge(b.next, a);
      }

      return result;
    };

    const doSort = (head) => {
      if (head === null || head.next === null) {
        return head;
      }

      const middle = getMiddle(head);
      const middleNext = middle.next;
      middle.next = null;

      const left = doSort(head);
      const right = doSort(middleNext);

      return sortedMerge(left, right);
    };

    this.head = doSort(this.head);
  }

  print() {
    let cur = this.head;
    const result = [];

    while (cur !== null) {
      result.push(cur.value);
      cur = cur.next;
    }

    console.log(result.join(" -> "));
  }
}

const linkedList = new LinkedList();
linkedList.append(40);
linkedList.append(10);
linkedList.append(35);
linkedList.append(70);
linkedList.append(22);
linkedList.append(3);
linkedList.append(5);
linkedList.print();

linkedList.sort();
linkedList.print();
