const mysql = require("mysql");
//접속정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "park",
  password: "password",
  database: "dev",
};
let connection = mysql.createConnection(conn); //db커넥션 생성
connection.connect(); //db접속

//insert
let sql = "insert into customers set ?";
let data = {
  name: "최기자",
  email: "choi@gmail.com",
  phone: "010-2222",
  address: "",
};
connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
  }
});

//update



sql = "SELECT * FROM customers";
connection.query(sql, function (err, results, fields) {
  console.log(err);
  console.log(results);
});

connection.end(); //db접속종료
