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
