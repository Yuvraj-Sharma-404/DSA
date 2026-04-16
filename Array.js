const studentDatabase = ["jordan", "erick", "john", "michel"];

const findStudent = (allStudent, studentName) => {
  for (let i = 0; i < allStudent.length; i++) {
    if (allStudent[i] === studentName) {
      console.log(`found ${studentName}`);
    }
  }
};

findStudent(studentDatabase, "erick");
