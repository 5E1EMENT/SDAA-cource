interface QueueItem {
  item: number
  priority: number
}

class PriorityQueue {
  queue: QueueItem[] = []

  get size() {
    return this.queue.length
  }

  get isEmpty() {
    return this.size === 0
  }

  enqueue(item: number, priority: number) {
    const element: QueueItem = { item, priority }
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
    this.isEmpty ? null : this.queue.shift().item
  }

  print() {
    console.log(this.queue)
  }

  toString() {
    this.queue.forEach(el => {
      console.log('Job Item', el.item, 'Job Priority', el.priority)
    })
  }
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}

const pq = new PriorityQueue()

for (let i = 0; i < 10000; i++) {
  const randomNumber = pq.getRandomNumber(0, 10000)
  pq.enqueue(randomNumber, randomNumber)
}

//pq.dequeue()
pq.toString()
// pq.print()
