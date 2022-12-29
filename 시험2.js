let users = [
  { userno: "100", email: "aa@b.com", username: "김기자", point: 250 },
  { userno: "101", email: "bb.yedam.ac", username: "이순신", point: 150 },
  { userno: "102", email: "cc.naver.com", username: "을지문덕", point: 100 },
];
makeTag();

function makeTag() {
  document.querySelector("#list").innerHTML = "";
  for (i = 0; i < users.length; i++) {
    let content = `<tr>
          <td>${users[i].userno}</td>
          <td>${users[i].email}</td>
          <td>${users[i].username}</td>
          <td class="point">${users[i].point}</td>
          <td><button>삭제</button></td>
        </tr>`;
    document.querySelector("#list").innerHTML += content;
  }
}

btnAdd.addEventListener("click", function () {
  let addObj = {
    userno: userno.value,
    email: email.value,
    username: username.vlaue,
    point: point.value,
  };
  if (email.value == "") {
    alert("email입력");
  }
  users.push(addObj);
  makeTag();
  inputClear();
});

btnSum.addEventListener("click", function () {
  pointTotalCalc();
});

list.addEventListener("click", function (ev) {
  if (ev.target.nodeName == "BUTTON") {
    let no = ev.target.closest("tr").querySelector("td").innerHTML;
    for (i = 0; i < users.length; i++) {
      if (users[i].no == no) {
        users.splice(i, 1);
      }
    }
    ev.target.closest("tr").remove();
  }
});

function inputClear() {
  userno.value = " ";
  email.value = " ";
  username.value = " ";
  point.value = " ";
}

function pointTotalCalc() {
  let total = 0;
  for (i = 0; i < users.length; i++) {
    total += users[i].point * 1;
    totalPoint.innerText = total;
  }
}
