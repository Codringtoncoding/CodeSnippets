function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (listA == null && listB == null) {
    return null;
  }

  if (listA == null && listB) {
    return listB;
  }
  if (listB == null && listA) {
    return listA;
  }

  //until list A reaches the value of null keep iteriing through the list unitl current = current[null]
  //when this is reached change current null over to list b and iterate and then return list a
  let current = listA;
  while (current.next) {
    current = current.next;
  }
  current.next = listB;

  return listA;
}

//https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript