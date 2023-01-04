var express = require("express");
const pool = require("../test/pool"); //db랑 커넥트하기위해
const { put } = require("./customers");
var router = express.Router();
sql = {
  select: "select * from books order by title",
  selectOne: "select * from books where no =?",
  insert: "insert into books set ?",
  update: "update books set ? where no =?",
  delete: "delete from books where no = ?",
};
//전체조회
router.get("/", function (req, res) {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results); //res.send(results)둘다 같음 이걸 client.js로 보냄
  });
});
//단건조회
router.get("/:id", (req, res) => {
  pool.query(sql.selectOne, req.params.id, function (err, results, fields) {
    console.log(results);
    res.json(results);
  });
});

//등록
router.post("/", (req, res) => {
  pool.query(sql.insert, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//수정
router.put("/:id", (req, res) => {
  let data = [req.body, req, params.id];
  pool.query(sql.update, data, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
  });
});

//삭제
router.delete("/:id", (req, res) => {
  pool.query(sql.delete, req.params.id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200;
    res.end();
  });
});

module.exports = router;
