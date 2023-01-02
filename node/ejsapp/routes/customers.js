const express = require("express");
const pool = require("../mysql/pool");
let router = express.Router();

router.get("/", (req, res) => {
  const sql = "select * from customers";
  pool.query(sql, (err, result) => {
    res.render("customers", { list: result });
  });
});
module.exports = router;
