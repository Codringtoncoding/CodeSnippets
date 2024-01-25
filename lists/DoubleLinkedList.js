class Node {
  constructor(value) {
    value = value;
    next = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 0;
  }
}

const doubleLinkedList = new DoubleLinkedList();
console.log