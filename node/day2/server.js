const http = require("http"); //http.js(모듈)의 http 객체 참조
const fs = require("fs");
//서버 선언(클라이언트 요청시 호출(처리) 될 핸들러)
const server = http.createServer((req, res) => {
  const myurl = new URL("http://localhost:3000" + req.url);
  console.log("pathname:" + myurl.pathname);
  console.log("searchparam:" + myurl.searchParam);
  if (myurl.pathname.startsWith("/page")) {
    const pagename = "./template" + myurl.pathname.substring(5) + ".html";
    fs.readFile(pagename, "utf8", (err, data) => {
      res.end(data);
    });
  } else {
    res.end("no path");
  }
});
server.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
