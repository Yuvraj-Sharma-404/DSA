// Creating our first linked list
class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class linkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.lenght = 1;
  }
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
  }
}

const myLinkedList = new linkedList(1);
myLinkedList.push(10);
console.log(myLinkedList);
