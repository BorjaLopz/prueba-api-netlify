const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected successfully");
  }
});

module.exports = pool.promise();
