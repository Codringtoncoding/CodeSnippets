class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      //be careful here as we need to exit
      // we won't know how long to do this for - we use true - keep looping as true is always == to t
      while (true) {
        //value what we inset - if it is less than the current nodes value
        if (value < currentNode.value) {
          //go left
          //is there a eleemnt to the left - if there isn't assign current node to the left and return out of it which is the tree.
          // keep lopping until there is no left side
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          //keep loopiing until there is no left hand side
          currentNode = currentNode.left;
        } else {
          //right if there is nothing to the right of it
          if (!currentNode.right) {
            currentNode.right = newNode;
            //stop the looping
            return this;
          }
          //as soon as we have a pointer to null thhat when we exit the loop otherwie we make the it keep traversing
          currentNode = currentNode.right;
        }
      }
    }
    // if(newNode.left)
  }

  lookup(value) {
    //check if there is a root node
    if (!this.root) {
      return false;
    }

    //otherwuse get the current node from this to root to start travesring
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        //currnet node is going to = currnetn node to the left.
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
    //go through each node an compare the value we have given to the nodes
  }

  //remove curios but not sure
  //   remove(value) {
  //     if (!this.root) {
  //       return false;
  //     }

  //     let currentNode = this.root;
  //     while (currentNode) {
  //       if (value < currentNode.value) {
  //         //currnet node is going to = currnetn node to the left.
  //         currentNode = currentNode.left;
  //       } else if (value > currentNode.value) {
  //         currentNode = currentNode.right;
  //       } else if (currentNode.value === value) {
  //         delete currentNode;
  //       }
  //     }
  //   }
  breadthFirstSearch() {
    //we need to see current node
    let currentNode = this.root;
    //actual list that is out anwwser
    let list = [];
    //queue to keep track of the level so we can access on the children
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      console.log(currentNode.value);
      //take the first item
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  breadthRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    //use the method within the class so use this.
    return this.breadthRecursive(queue, list);
  }

  // we can't declare variables inside it as it will reset so we need to do it out
  DFSinOrder() {
    return traverseInOrder(this.root, []);
  }

  DFSPostOrder() {
    return traversPostOrder(this.root, []);
  }

  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    console.log(node.value);
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.traverseInOrder(node.right, list);
    }
    return list;
  }

  traversePreOrder(node, list) {
    console.log(node.value);

    list.push(node.value);

    if (node.left) {
      this.traversePreOrder(node.left, list);
    }
    if (node.right) {
      this.traversePreOrder(node.right, list);
    }
    return list;
  }

  traversePostOrder(node, list) {
    console.log(node.value);
    if (node.left) {
      this.traversePostOrder(node.left, list);
    }
    if (node.right) {
      this.traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
  }
}

//    9
// 3     20
//1 4 12 140

//three types of treversals for depth search

//in order = [1,3,4,9,12,20,140]
//pre order = [9,3,1,4,20,12,140]
//post order = [1, 4,3,,12,140,20,9]

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(10);
tree.insert(5);
tree.DFSinOrder();
// console.log("log", tree.breadthFirstSearch());
// console.log("tree", tree.lookup(10));
//gotcha for recursive
//this key word only works within a class so this.root won't work so we canll it tree
// tree.breadthRecursive([tree.root], []);
// console.log(tree);

// JSON.stringify(traverse(tree.root));

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

//divie and conquer = we don't visit them all but make a descion based on left and right

//best

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
  BreadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  BreadthFirstSearchMyself() {
    let list = [];
    let queue = [];
    let currentNode = this.root;
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }
  BreadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.BreadthFirstSearchR(queue, list);
  }
  DFTPreOrder() {
    return traversePreOrder(this.root, []);
  }
  DFTPostOrder() {
    return traversePostOrder(this.root, []);
  }
  //   DFTInOrder() {
  //     return traverseInOrder(this.root, []);
  //   }

  DFTInOrder() {
    traverseInOrder(this.node, list);
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node, list);
  }
  return list;
}

// function traversePreOrder(node, list) {
//   list.push(node.value);
//   if (node.left) {
//     traversePreOrder(node.left, list);
//   }
//   if (node.right) {
//     traversePreOrder(node.right, list);
//   }
//   return list;
// }

// function traverseInOrder(node, list) {
//   if (node.left) {
//     traverseInOrder(node.left, list);
//   }
//   list.push(node.value);
//   if (node.right) {
//     traverseInOrder(node.right, list);
//   }
//   return list;
// }

// function traversePostOrder(node, list) {
//   if (node.left) {
//     traversePostOrder(node.left, list);
//   }
//   if (node.right) {
//     traversePostOrder(node.right, list);
//   }
//   list.push(node.value);
//   return list;
// }

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
// JSON.stringify(traverse(tree.root))

console.log("BFS", tree.BreadthFirstSearch());
console.log("BFS", tree.BreadthFirstSearchR([tree.root], []));
console.log("DFSpre", tree.DFTPreOrder());
console.log("DFSin", tree.DFTInOrder());
console.log("DFSpost", tree.DFTPostOrder());

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
