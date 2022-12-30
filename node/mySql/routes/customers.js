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

//단건조회
router.get("/:id", (req, res) => {
  sql = "SELECT * FROM customers where id=?";
  pool.query(sql,req.id,function(err,results,fields){
    res.json(results);
  })
});

//등록
router.post("/", (req, res) => {
  let sql = "insert into customers set ?"; //sqldb에 보내는내용
  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

router.put("/:id", (req, res) => {
  let sql = "update customers set ? where id=?";
  let data =[req.body,req.params.id];
  pool.query(sql,data,function(err,results,fields){
    if (err){
      console.log(err);
    }
    let resultData = {}
    if(results.changedRows>0){
      resultData.result = true;
      resultData.data = req.body;
    } else{
      resultsData.result = false;
    }
    res.json(results);
  })
});

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
