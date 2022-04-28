import { Vertex } from './Vertex'

export interface WeightedGraph {
  addVertex(vertex: Vertex): void
  addEdge(vertex1: string, vertex2: string, weight: number): void
}

export class WeightedGraph implements WeightedGraph {
  adjList: Record<string, any> = {}
  addVertex(vertex: Vertex): void {
    const key = vertex.verticle
    if (!this.adjList[key]) {
      this.adjList[key] = {}
    }
  }
  addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.adjList[vertex1][vertex2] = weight
    this.adjList[vertex2][vertex1] = weight
  }

  removeEdge(vertex1: Vertex, vertex2: Vertex) {
    const vertex1Key = vertex1.verticle
    const vertex2Key = vertex2.verticle
    delete this.adjList[vertex1Key][vertex2Key]
    delete this.adjList[vertex1Key][vertex2Key]
  }
}
