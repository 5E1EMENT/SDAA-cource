class MinHeap {
  constructor(public storage: number[] = [], private size: number = 0) {}

  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  getLeftChildIndex(index: number): number {
    return 2 * index + 1
  }

  getRightChildIndex(index: number): number {
    return 2 * index + 2
  }

  hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0
  }

  hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.size
  }
  hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.size
  }

  parent(index: number) {
    return this.storage[this.getParentIndex(index)]
  }

  leftChild(index: number) {
    return this.storage[this.getLeftChildIndex(index)]
  }

  rightChild(index: number) {
    return this.storage[this.getRightChildIndex(index)]
  }

  swap(index1: number, index2: number): void {
    const temp = this.storage[index1]
    this.storage[index1] = this.storage[index2]
    this.storage[index2] = temp
  }

  insert(data: number) {
    this.storage[this.size] = data
    this.size += 1
    this.heapifyUp(this.size - 1)
    console.log('job', this.storage)
  }

  heapifyUp(index: number) {
    if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      this.swap(this.getParentIndex(index), index)
      this.heapifyUp(this.getParentIndex(index))
    }
  }

  randomValue(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}

const heap = new MinHeap()

for (let i = 0; i < 10; i++) {
  const randomValue = heap.randomValue(0, 10000)
  heap.insert(randomValue)
}
