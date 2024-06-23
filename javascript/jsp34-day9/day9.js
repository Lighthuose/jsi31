let inputkey = document.getElementById("key");
let inputvalue = document.getElementById("value");
let button = document.getElementById("add_local");
console.log(add_local);
button.addEventListener("click",function(){
  //  console.log("key = "  +   inputkey.value);

    //console.log("value = " +   inputvalue.value);
//})
//localStorage.setItem("địa chỉ nhà","x.Đông Xuân,h.Quốc oai,thành phố Hà Nội");
//localStorage.setItem("tên bố","Nguyễn Đức Hải");
//localStorage.setItem("tên mẹ","Nguyễn Thị Thanh Hà");

console.log(inputkey.value);

console.log(inputvalue.value);

localStorage.setItem(inputkey.value,inputvalue.value);


})

