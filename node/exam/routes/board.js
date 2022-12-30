var express = require("express");
const pool = require("../test/pool");
var router = express.Router();
/* GET home page. */

sql = {
  select: "select * from board",
  selectOne: "select * from board where no =?",
  insert: "insert into board set ?",
  update: "update board set ? where no =?",
  delete: "delete from board where no = ?",
};

//전체조회
router.get("/", function (req, res) {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
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
  let data = [req.body, req.params.id];
  pool.query(sql.update, data, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//삭제
router.delete("/:id", (req, res) => {
  pool.query(sql.delete, req.params.id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

module.exports = router;
