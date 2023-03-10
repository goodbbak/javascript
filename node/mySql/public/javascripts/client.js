//html의 자바 스크립트
const url = "/customers";
selectAll(); //전체조회 후 화면에 그리기
insert(); //등록버튼에 이벤트 지정
customerDelelte();
oneSelect();
//전체조회
function selectAll() {
  fetch(url)
    .then((res) => res.json()) //string으로 온 json구조의 데이타를 json객체화
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
//추가
function insert() {
  addbtn.addEventListener("click", function () {
    let data = {
      id: userid.value,
      name: username.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(url, {
      //서버로 url보냄
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

/* //단건조회 안됨 다시
function oneSelect() {
  list.addEventListener("click", function (ev) {
    let id = ev.target.closest("tr").getAttribute("data-id");
    if (ev.target.id == "selbtn") {
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          userid.value = res.id;
          username.value = res.name;
          email.value = res.email;
          phone.value = res.phone;
          address.value = res.address;
        });
    }
  });
}
 //수정 안됨
  function update(){
  updbtn.addEventListener("click",function(){
    fetch(url,{ method: "put"})
      .then((res)=>res.json())
      .then((res)=>{
  if(res.result == true){
    alert("수정완료")
    selectAll();
  }else{
    alert("수정실패")
  }
})
 .catch()=>{alert("수정실패")
}; 
  })
}  */

/* function oneselect() {
  list.addEventListener("click", function (ev) {
    let id = ev.target.closest("tr").children[1].innerText;
    if (ev.target.id == "selbtn") {
      fetch(`${url}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          document.getElementsByClassName("form-control")[0].value = res.id;
          name1.value = res.name;
          email.value = res.email;
          phone.value = res.phone;
          address.value = res.address;
        });
    }
  });
}

function update() {
  let addbtn = document.getElementsByClassName("btn");
  addbtn[1].addEventListener("click", function () {
    let data = {
      id: id.value,
      name: name1.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    };
    fetch(`${url}/${id.value}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        selectAll();
      });
  });
} */
