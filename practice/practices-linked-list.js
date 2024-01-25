class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printItems() {
    let array = [];
    let currnetNode = this.head;
    while (currnetNode !== null) {
      array.push(currnetNode.value);
      currnetNode = currnetNode.next;
    }
    console.log(array, 'list print out');
  }

  traverseList(index) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode !== null) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
  }
  insert(index, value) {
    //validations
    const newNode = new Node(value);
    const leader = this.traverseList(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseList(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printItems();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printItems();
  }
}

const pizza = new LinkedList(5);
pizza.prepend(1);
pizza.prepend(12);
pizza.prepend(15);
pizza.prepend(11);

pizza.printItems();
pizza.remove(3);

console.log(pizza.insert(1), 'pizza');

console.log(pizza.reverse(), 'reverse');
