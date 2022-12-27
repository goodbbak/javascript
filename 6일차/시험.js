let books = [
  {no : 'inbn0002',title : '스프링', writer : '김기자', price :40000},
  {no : 'inbn0003',title : '자바', writer : '이순신', price :25000},
  {no : 'inbn0004',title : 'SQL', writer : '을지문덕', price :32000}
]
    ////////////////////테이블에 js내용(o)/////////////////////////
    for(i=0;i<books.length;i++){   
  let info = `<tr>
        <td><input type="checkbox"></td>
        <td>${books[i].no}</td>
        <td>${books[i].title}</td>
        <td>${books[i].writer}</td>
        <td class="price">${books[i].price}</td>
        <td><button id="del">삭제</button></td>
      </tr>`
      ////////////////////삭제되게(o)/////////////////////////
      document.querySelector("#list").innerHTML += info
      list.addEventListener("click",function(ev){
        if(ev.target.nodeName == "BUTTON"){ev.target.closest("tr").remove()
       }} )
    }
//////////////////////////추가누르면 추가되게(x)/////////////////////////////////////////
    let inputs = document.querySelectorAll(".form-control")
    for(i=0;i<inputs.length;i++){
    let adds = document.querySelector("#add")
    adds.addEventListener("click",function(){
      let my = `<tr>
        <td><input type="checkbox"></td>
        <td>${inputs[i].value}</td>
        <td>${inputs[i].value}</td>
        <td>${inputs[i].value}</td>
        <td class="price">${inputs[i].value}</td>
        <td><button id="del">삭제</button></td>
      </tr>`
      document.querySelector("#list").innerHTML += my
   })}
   /////////////////////////3-1)가격총액계산함수(0)////////////////////////////////
   /* function Sum() */{let prices = document.querySelectorAll(".price")
   let sum = 0;
   for(i=0;i<prices.length;i++){
     sum += prices[i].innerText*1
    totalPrice.innerText = sum
   }
  }
  