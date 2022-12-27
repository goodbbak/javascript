/* fssync.js
동기식 = 블록킹함수 */
const fs = require('fs'); // = html <script src = 'js'>
const data = fs.readFileSync("./template/test.txt", "utf8");
console.log(data);
