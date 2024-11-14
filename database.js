import mysql, { createPool } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
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
