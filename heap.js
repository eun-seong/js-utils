class MaxHeap {
  heap = [undefined];

  constructor(initialData) {
    if (initialData) {
      for (let i = 0, size = initialData.length; i < size; i++) {
        this.add(initialData[i]);
      }
    }
  }

  add(elem) {
    let cur = this.heap.length;
    this.heap.push(elem);

    while (cur !== 1 && elem > this.heap[Math.floor(cur / 2)]) {
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
      if (this.heap[child] < this.heap[child + 1]) {
        child++;
      }

      if (this.heap[child] < tmp) {
        break;
      }

      this.heap[parent] = this.heap[child];
      parent = child;
      child *= 2;
    }
    this.heap[parent] = tmp;

    return root;
  }
}

const heap = new MaxHeap([6, 2, 4, 7, 8, 3, 1]);
console.log(heap);
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
