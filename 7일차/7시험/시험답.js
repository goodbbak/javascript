let books = [
  {no:'inbn0002', title : '스프링', writer:'김기자', price:40000},
  {no:'inbn0003', title : '자바', writer:'이순신', price:25000},
  {no:'inbn0004', title : 'SQL', writer:'을지문덕', price:32000}
] 
// 배열의 데이터로 태그 그리기
booksMake();
// 가격 총금액
priceTotalCalc();

function booksMake(){
  list.innerHTML = "";
  for(let i =0 ; i<books.length; i++){  
    list.innerHTML += `<tr>
                        <td><input type="checkbox"></td>
                        <td>${books[i].no}</td>
                        <td>${books[i].title}</td>
                        <td>${books[i].writer}</td>
                        <td class="price">${books[i].price}</td>
                        <td><button>삭제</button></td>
                        </tr>`
  }
}


//삭제버튼 클릭
list.addEventListener("click", function(ev){
  if( ev.target.nodeName == "BUTTON" ) {
    //ev.target.closest("tr").remove();

    //배열에서 삭제
    let no = ev.target.closest("tr").children[1].innerText;
    for(let i=0; i<books.length; i++) {
      if( books[i].no == no ) {
        books.splice(i,1);
      }
    }

    //태그 그리기
    booksMake();

    //금액 계산
    priceTotalCalc();
  }
})

//추가버튼 클릭
btnAdd.addEventListener("click", function(ev){
    let addObj = {no:no.value, 
                  title :title.value, 
                  writer:writer.value, 
                  price:price.value}
    
    //입력값 체크
    if( ! inputCheck() ) {
      return;
    }

    //배열에 추가
    books.push(addObj);

    //금액 계산
    priceTotalCalc();

    //배열의 내용을 태그로 그리고
    booksMake();  

    //텍스트필드 클리어
    inputClear();
})

//총금액 계산
function priceTotalCalc(){
  let total = 0;
  for(let i=0; i<books.length; i++) {
    total += books[i].price;
  }
  totalPrice.innerHTML = total;
}

function inputCheck(){
  if (no.value == "") {
    alert("도서번호");
    no.focus();
    return false;
  }
  if (title.value=="") {
    alert("도서명 등록");
    title.focus();
    return false;
  }
  return true;
}

function inputClear(){
  no.value = "";
  title.value = ""
  writer.value = ""
  price.value = ""
}