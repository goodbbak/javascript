const pool = require("./pool");

sql = "SELECT * FROM customers";
pool.query(/* 질문 */ sql, function (err, results, fields) {
  //pool이 서버가 db에 연결하는거
  if (err) {
    console.log(err);
  }
  console.log(results);
});
