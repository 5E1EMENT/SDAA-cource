import { Vertex } from './Vertex'

export class Edge {
  from = ''
  to = ''
  constructor(
    from: Vertex = null,
    to: Vertex = null,
    public weight: number = null
  ) {
    this.from = from.verticle
    this.to = to.verticle
  }
}
