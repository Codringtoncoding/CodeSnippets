const breadth = () => {
  let queue = [];
  let list = [];
  let currentNode = this.root;

  queue.push(currentNode);
  while (queue < 0) {
    queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.elft);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return list;
  }
};

const breadtR = (queue, list) => {
  if (!queue.lenght) {
    return list;
  }
  const currentNode = queue.shift();
  list.push(currentNode.value);
  if (currentNode.left) {
    queue.push(currentNode.elft);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }

  return breadtR(queue, list);
};

const depth = () => {
  return traveralInorder(node, list);
};

const tracerInoder = (node, list) => {
  if (node.left) {
    tracerInoder(node, list);
  }

  list.push(node.valie);

  if (node.right) {
    traverseInOrder(node, list);
  }

  return list;
};
