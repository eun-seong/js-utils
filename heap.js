class Heap {
  heap = [undefined];
  compare = (a, b) => a > b; // 디폴트는 MaxHeap

  constructor(initialData, compare) {
    if (compare) {
      this.compare = compare;
    }
    if (initialData) {
      for (let i = 0, size = initialData.length; i < size; i++) {
        this.add(initialData[i]);
      }
    }
  }

  add(elem) {
    let cur = this.heap.length;
    this.heap.push(elem);

    while (cur !== 1 && this.compare(elem, this.heap[Math.floor(cur / 2)])) {
      this.heap[cur] = this.heap[Math.floor(cur / 2)];
      cur = Math.floor(cur / 2);
    }
    this.heap[cur] = elem;
  }

  pop() {
    const root = this.heap[1];
    const tmp = this.heap.pop();
    let parent = 1,
      child = 2;

    while (child < this.heap.length) {
      if (this.compare(this.heap[child + 1], this.heap[child])) {
        child++;
      }

      if (this.compare(tmp, this.heap[child])) {
        break;
      }

      this.heap[parent] = this.heap[child];
      parent = child;
      child *= 2;
    }

    if (this.heap.length !== 1) {
      this.heap[parent] = tmp;
    }

    return root;
  }

  print() {
    console.log(this.heap.slice(1));
  }

  get length() {
    return this.heap.length - 1;
  }
}

const minHeap = new Heap([6, 2, 4, 7, 8, 3, 1], (a, b) => a < b);
minHeap.print();
console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());
console.log(minHeap.pop());
