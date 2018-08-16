const db = require("./db");

// Get all the rows in our students table!
async function addStudent(name) {
  const results = await db.query(
    "INSERT INTO students (name) VALUES ($1) RETURNING *",[name]
    // We're using RETURNING * to get back the new record
    // notice our use of $1 - NEVER EVER use string concatenation/interpolation in your SQL queries.
  );
  console.log(results.rows[0]); // we are using [0] because there is only 1 record here.
}

addStudent("Jasmin").then(() => process.exit(0));
