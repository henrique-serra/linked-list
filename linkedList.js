class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  tail(currentNode = this.head) {
    if(!this.head) return null;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  size(currentNode = this.head) {
    let size = 0
    if(!this.head) return size;
    while(currentNode) {
      currentNode = currentNode.next;
      size++;
    }
    return size;
  };

  prepend(value) {
    if(!this.head) {
      this.head = new Node(value);
      return this;
    }

    let next = this.head;
    this.head = new Node(value, next);
    return this;
  };

  append(value) {
    if(!this.head) {
      return this.head = new Node(value);
    }

    let tail = this.tail();
    
    tail.next = new Node(value);
    return this;
  };

  at(index) {
    if(index > (this.size() - 1)) return null;
    let i = 0;
    
    if(index < 0) {
      index = this.size() + index;
    }
    
    let currentNode = this.head;
    while(i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    
    return currentNode;
  };

  pop() {
    this.at(-2).next = null;
    return this;
  };

  contains(value) {
    let currentNode = this.head;
    
    let contains = false;
    while(!contains && currentNode) {
      if(currentNode.value === value) {
        contains = true;
      }
      currentNode = currentNode.next;
    }

    return contains;
  };

  find(value) {
    let currentNode = this.head;
    
    let i = 0;
    let found = false;
    while(!found && currentNode) {
      if(currentNode.value === value) {
        found = true;
        break;
      }
      currentNode = currentNode.next;
      i++;
    }

    if(!found) return null;
    return i;
  };

  toString() {
    let currentNode = this.head;
    let string = 'HEAD';

    while(currentNode) {
      let currentNodeValue = currentNode.value;
      string = string +`(${currentNodeValue}) -> `;
      currentNode = currentNode.next;
    }

    string = string + 'null';
    
    return string;
  };

  insertAt(value, index) {
    
  }
}

export default LinkedList;