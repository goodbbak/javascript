// project router DB로 요청
const express = require("express");
const pool = require("../sql/pool");
let router = express.Router();

router.post("/", (req, res) => {
  let sql = "insert into project set ?";
  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
router.get("/", (req, res) => {
  sql = "SELECT * FROM project order by score desc";
  pool.query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
module.exports = router;
