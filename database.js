import dotenv from "dotenv";

import mysql from "mysql2";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

const getExercises = async () => {
  const rows = await pool.query("SELECT * FROM exercisess");
  return rows[0];
};

const getExercis = async (id) => {
  const row = await pool.query(`SELECT * FROM exercisess WHERE id=?`, [id]);
  return row[0];
};
export { getExercises, getExercis };

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);
