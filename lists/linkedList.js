// 10 --> 2 --> 4

// let myLinkedList = {
//     head: {
//         value: '1',
//         next: {
//             value: '3',
//             next: {
//                 value: '3'
//                 next: null
//             }
//         }
//     }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    //   prev: null,
  }
}

// printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(array);
//     return array;
//   }

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = console.log(this.head, "head") || this.head;
    console.log(this.tail, "calkss");
    this.length = 1;
  }

  lookupTraverse(index) {
    if (index === 0) {
      return this.head;
    }

    const lookupArr = this.printList();
    let counter = 0;
    let currentNode = this.head; //while loop upwars
    while (counter !== index) {
      currentNode = currentNode;
      counter++;
    }
    return currentNode;
  }

  append(value) {
    let newNode = new Node(value);

    // newNode.prev = this.tail;

    this.tail.next = newNode;

    this.tail = newNode;
    // console.log(this.head, "wat");
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);

    //create pointer
    newNode.next = this.head;
    //update the reference
    this.head = newNode;

    this.length++;
    return this;
  }

  insert(index, value) {
    let newNode = new Node();
    if (this.head.index === undefined || 0) {
      return this.append(value);
    }
    const leader = this.lookupTraverse(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

const newLinkedList = new LinkedList(10);
newLinkedList.append(11);
newLinkedList.prepend(1);
newLinkedList.printList();
// newLinkedList.append(14);

console.log(newLinkedList, "linked list");
