// project2 router DB로 요청
const express = require("express");
const pool = require("../sql/pool");
let router = express.Router();

router.post("/", (req, res) => {
  let sql = "insert into project set ?";
  pool.query(sql, req.body, function (err, results) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

router.get("/", (req, res) => {
  sql = "SELECT * FROM project order by score desc";
  pool.query(sql, function (err, results) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

router.get("/:store", (req, res) => {
  sql = "SELECT * FROM project where store=?";
  pool.query(sql, req.params.store, function (err, results) {
    res.json(results[0]);
  });
});

router.delete("/:store", (req, res) => {
  const id = req.params.store;
  let sql = "delete from project where store = ?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200;
    res.end();
  });
});

router.put("/:store", (req, res) => {
  let sql = "update project set ? where store=?";
  let data = [req.body, req.params.store];
  pool.query(sql, data, function (err, results) {
    res.end();
  });
});

module.exports = router;
