//work.js
const http = require("http");
let todoList = [
  { content: "test1", completed: false },
  { content: "test2", completed: true },
  { content: "test3", completed: false },
  { content: "test4", completed: false },
];

const server = http.createServer((req, res) => {
  const myUrl = new URL("http://127.0.0.1:3000" + req.url);
  if (myUrl.pathname == "/todolist") {
    res.end(JSON.stringify(todoList));
  }
});
server.listen(3000, () => {
  console.log("server running http://127.0.0.1:3000");
});

//http://127.0.0.1:3000/todo?no=1 순서대로 한건씩 받게
//http://127.0.0.1:3000/todolist 전부 다 받고
