import { Vertex } from './Vertex'
import { WeightedGraph } from './WeightedGraph'
import { PriorityQueue } from './PriorityQueue'
interface Path {
  path: string[]
  distance: number
}

interface DijkstraInterface {
  findShortestPath(vertex1: Vertex, vertex2: Vertex): void
  //   findAllShortestPaths(vertex: Vertex): Record<string, Path>
}

export class Dijkstra implements DijkstraInterface {
  costFromStartTo: Record<string, any> = {}
  prev: Record<string, any> = {}
  checkList = new PriorityQueue()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private graph: WeightedGraph) {}
  findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
    const vertex1Key = vertex1.verticle
    const vertex2Key = vertex2.verticle

    let current
    const result = []
    for (const vert in this.graph.adjList) {
      if (vert === vertex1Key) {
        this.costFromStartTo[vert] = 0
        this.checkList.enqueue(vert, 0)
      } else {
        this.costFromStartTo[vert] = Infinity
      }
      this.prev[vert] = null
    }
    while (this.checkList.queue.length) {
      current = this.checkList.dequeue()
      if (current === vertex2Key) {
        while (this.prev[current]) {
          result.push(current)
          current = this.prev[current]
        }
        break
      }
      for (const neighbor in this.graph.adjList[current]) {
        const costToNeighbor =
          this.costFromStartTo[current] + this.graph.adjList[current][neighbor]
        if (costToNeighbor < this.costFromStartTo[neighbor]) {
          this.costFromStartTo[neighbor] = costToNeighbor
          this.prev[neighbor] = current
          this.checkList.enqueue(neighbor, costToNeighbor)
        }
      }
    }

    return {
      path: result.concat(current).reverse(),
      distance: this.costFromStartTo[vertex2Key],
    }
  }
  //   findAllShortestPaths(vertex: Vertex): Record<string, Path> {}
}
