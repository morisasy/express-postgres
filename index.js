const db = require("./db");


// let's make a function to get all the rows in our students table!
async function getStudents() {
  const results = await db.query("SELECT * FROM students");
  console.log(results.rows);
}

// let's get our students and then stop the node process
// when we start using express, process.exit will be a response from the server instead
getStudents().then(() => process.exit(0));
