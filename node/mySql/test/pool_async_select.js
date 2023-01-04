const mysql = require("./pool_async");

sql1 = "select * from customers";
sql2 = "select * from board";

//mysql.query(sql1).then((result) => console.log(result));

async function get() {
  let result1 = await mysql.query(sql1);
  let result2 = await mysql.query(sql2, result1[0].id);
  console.log({ cust: result1, board: result2 });
}
get();
console.log("end");
