// First Question
const studentDatabase = ["jordan", "erick", "john", "michel"];

const findStudent = (allStudent, studentName) => {
  for (let i = 0; i < allStudent.length; i++) {
    if (allStudent[i] === studentName) {
      console.log(`found ${studentName}`);
    }
  }
};

findStudent(studentDatabase, "erick");

// Second Question
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
}

const myNewArray = new MyArray();
myNewArray.push("Apple");
myNewArray.push("Orange");
myNewArray.push("Banana");
console.log(myNewArray);

// Third Question
class secArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length];
    this.length--;
    return lastItem;
  }

  shift() {
    let firstitem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i - 1];
    }
    this.length--;
    return firstitem;
  }

  deleteByIndex(item) {
    let itemIndex = this.data[item];
    for (let i = itemIndex; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return itemIndex;
  }
}

const mySecArray = new secArray();
mySecArray.push("Batman");
mySecArray.push("Superman");
mySecArray.push("Catwoman");
mySecArray.push("Flash");
mySecArray.pop();
console.log(mySecArray);
// mySecArray.shift();
console.log(mySecArray.deleteByIndex(0));
console.log(mySecArray);
