//sudo -u postgres psql postgres

/**
CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);
INSERT INTO students (name) VALUES ('Elie');
INSERT INTO students (name) VALUES ('Michael');
INSERT INTO students (name) VALUES ('Joel');
INSERT INTO students (name) VALUES ('Matt');
\q

*/

module.exports={
  user: 'postgres',
  host: 'localhost',
  database: 'pglessonone',
  password: 'adile49',
  port: 5432,
};
