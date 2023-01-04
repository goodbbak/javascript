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

let pool = mysql.createPool(conn); //db커넥션 생성
function query(sql, data = null) {
  return new Promise(function (resolve, result) {
    pool.query(sql, data, (err, result, fields) => {
      resolve(result);
    });
  });
}

module.exports = { pool, query };
