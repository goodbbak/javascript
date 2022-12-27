const http = require("http");
let infoarr = [];
infoarr["kim"] = { name: "김유신", hobby: "게임" };
infoarr["park"] = { name: "박기자", hobby: "독서" };

const server = http.createServer((req, res) => {
  const myurl = new URL("http://127.0.0.1:3000" + req.url);
  console.log(myurl.pathname);
  console.log(myurl.searchParams);
  if (myurl.pathname == "/") {
    res.end("main");
  } else if (myurl.pathname == "/info") {
    res.setHeader("content-type", "text/html");
    let userid = myurl.searchParams.get("userid");
    res.write(html);
    res.end();
  } else if (myurl.pathname == "/boardReg") {
    res.write(boardReg());
    res.end();
  } else if (myurl.pathname == "/boardRegAction") {
    let title = myurl.searchParams.get("title");
    let content = myurl.searchParams.get("content");
    console.log("title", title);
    console.log("content", content);
    res.end("등록완료");
  } else if (myurl.pathname == "/userReg") {
    res.write(userReg());
    res.end();
  } else if (myurl.pathname == "/userRegAction") {
    let userid = myurl.searchParams.get("userid");
    let username = myurl.searchParams.get("username");
    let pw = myurl.searchParams.get("pw");
    let hp = myurl.searchParams.get("hp");
    console.log(userid);
    console.log(username);
    console.log(pw);
    console.log(hp);
    res.end("success");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running http://127.0.0.1:3000");
});

function info(userid) {
  if (!userid || !infoarr[userid]) {
    res.end("no user");
    return "no user";
  }
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<h3>my info</h3>
  <div>id: ${userid ? userid : ""}</div>
  <div>이름: ${infoarr[userid].name}</div>
  <div>취미: ${infoarr[userid].hobby}</div>
</body>
</html>`;
}

function boardReg() {
  let boardReg = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h3>게시글 작성~z~</h3>
    <form action="/boardRegAction">
      <div>제목<input type="text" name="title"/></div>
      <div>내용<textarea name="content" id="" cols="30" rows="10"></textarea></div>
      <div><button>등록</button></div>
    </form>
  </body>
</html>
`;
  return boardReg;
}

function userReg() {
  let userReg = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>userRegt</title>
  </head>
  <body>
    <form action="userRegAction">
      <input type="text" name="userid" placeholder="아이디"/>
      <input type="text" name="username" placeholder="유저네임"/>
      <input type="password" name="pw" placeholder="패스워드"/>
      <input type="tel" name="hp" placeholder="전화번호"/>
      <button>등록</button>
    </form>
  </body>
</html>
`;
  return userReg;
}
