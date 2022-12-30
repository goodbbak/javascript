//npm사이트 mysql검색해서 사용법 알수있
//이전에 mysql에서 다른서버에서 들어올수있게 권한 허용해놓고
const mysql = require("mysql"); //mysql을 사용하기 위한 모듈실행
//접속정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "park",
  password: "password",
  database: "dev",
};
//커넥션을 보다 쉽게 해주는게 pool = 서버입장에서 좋음 pool.js파일이랑 비교
let connection = mysql.createConnection(conn); //db커넥션 생성 mysql에 연결
connection.connect(); //db접속

//select조회
sql = "SELECT * FROM customers";
//sql = "SELECT * FROM customers where id =? and name=?";
//let data = [id에넣을값,name에넣을값]?에 순서대로 들어감 //위에data처럼 다 보낼수도 있고 원하는 정보만 보낼수도 있음
connection.query(sql, function (err, results, fields) {
  console.log(err);
  console.log(results);
});

connection.end(); //db접속종료 디비에 들어올수 있는연결 한정돼있음
