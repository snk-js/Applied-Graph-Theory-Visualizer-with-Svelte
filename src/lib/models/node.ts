export class Node {
  id: string;
  index: number;
  position: { x: number, y: number } = {
    x: 0,
    y: 0,
  };
  visited = false;
  neighbors: number[] = [];

  constructor(id: string, index: number) {
    this.id = id || "";
    this.index = index;
  }

  setPosition(position: { x: number; y: number }) {
    this.position = position;
    return this;
  }

  addNeighbors(neighbors: number[]) {
    this.neighbors = neighbors;
    return this;
  }

  setVisited(visited: boolean) {
    this.visited = visited;
    return this;
  }

  getPosition() {
    return this.position
  }
}
