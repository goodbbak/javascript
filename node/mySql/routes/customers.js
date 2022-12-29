//customers의 라우터

var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

//전체 조회
router.get("/", (req, res) => {
  sql = "SELECT * FROM customers";
  pool.query(sql, function (err, results, fields) {
    //sqldb에서 데이터가져오기
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  let sql = "insert into customers set ?"; //sqldb에 보내는내용
  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  let sql = "delete from customers where id = ?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200;
    res.end();
  });
});

module.exports = router;
