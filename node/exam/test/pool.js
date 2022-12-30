//sqldb랑 연결
const mysql = require("mysql");
//접속정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "park",
  password: "password",
  database: "dev",
  connectionLimit: 10,
};
let pool = mysql.createPool(conn);
module.exports = pool;
