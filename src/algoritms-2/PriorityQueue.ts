interface QueueItem {
  val: string
  priority: number
}

export class PriorityQueue {
  queue: QueueItem[] = []

  get size() {
    return this.queue.length
  }

  get isEmpty() {
    return this.size === 0
  }

  enqueue(val: string, priority: number) {
    const element: QueueItem = { val, priority }
    if (
      this.isEmpty ||
      element.priority >= this.queue[this.size - 1].priority
    ) {
      this.queue.push(element)
    } else {
      for (const index in this.queue) {
        if (element.priority < this.queue[index].priority) {
          this.queue.splice(+index, 0, element)
          break
        }
      }
    }
  }

  dequeue() {
    return this.isEmpty ? null : this.queue.shift().val
  }
}
