class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    console.log(this);

    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      console.log(this);
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(this);
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueues = new Queue();
myQueues.enqueue("chan");
myQueues.enqueue("cjasfd");
