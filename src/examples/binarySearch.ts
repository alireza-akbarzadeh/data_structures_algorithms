export function binarySearch(arrays: number[], target: number) {
  let firstIndex = 0;
  let lastIndex = arrays.length - 1;
  while (firstIndex <= lastIndex) {
    const middlePosition = Math.floor((firstIndex + lastIndex) / 2);
    const middle = arrays[middlePosition];
    if (middle === target) return middlePosition;
    if (middle < target) return (firstIndex = middlePosition + 1);
    else {
      lastIndex = middlePosition - 1;
    }
  }
  return -1;
}

// Define the structure of a complex tree node
class TreeNode {
  key: number; // The value to search for
  data: string; // Additional data stored in the node (e.g., metadata)
  timestamp: Date; // Some additional metadata, e.g., the date the node was created
  left: TreeNode | null; // Left child
  right: TreeNode | null; // Right child

  constructor(key: number, data: string) {
    this.key = key;
    this.data = data;
    this.timestamp = new Date(); // Auto-generate a timestamp when the node is created
    this.left = null;
    this.right = null;
  }
}

class searchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }
  insert(key: number, data: string): void {
    const newNode = new TreeNode(key, data);
    if (!this.root) {
      this.root === newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }
  private _insertNode(node: TreeNode, newNode: TreeNode): void {}
}
