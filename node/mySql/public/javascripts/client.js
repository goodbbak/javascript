//html의 자바 스크립트
const url = "/customers";
selectAll(); //전체조회 후 화면에 그리기
insert(); //등록버튼에 이벤트 지정
customerDelelte();
//전체조회
function selectAll() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //list 클리어
      list.innerHTML = "";
      for (i = 0; i < res.length; i++) {
        const tr = `<tr data-id="${res[i].id}">
            <td><input type="checkbox" /></td>
            <td>${res[i].id}</td>
            <td>${res[i].name}</td>
            <td>${res[i].email}</td>
            <td>${res[i].phone}</td>
            <td>${res[i].address}</td>
            <td><button id="delbtn">삭제</button><button id="selbtn">조회</button></td>
          </tr>`;
        list.innerHTML += tr;
      }
    });
}
//등록
function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        selectAll();
      });
  });
}
//삭제
function customerDelelte() {
  list.addEventListener("click", function (ev) {
    if (ev.target.id == "delbtn") {
      let id = ev.target.closest("tr").getAttribute("data-id");
      fetch(`${url}/${id}`, { method: "delete" }).then(() => {
        selectAll();
      });
    }
  });
}

//단건조회
