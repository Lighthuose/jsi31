// let list_h1_element = document.querySelectorAll(".line1");
// console.log(list_h1_element);
// // querySelect("value"):Lấy ra thẻ đầu tiên
// // có giá trị tương ứng value
// list_h1_element[0].innerText = "abc";
// list_h1_element[1].innerText = "Đại Sơn";
// list_h1_element[0].style.color = "yellow";
// list_h1_element[1].style.backgroundColor = "blue";

// let array = ["abc", "xyz", "bng"];
// console.log(array[0]);

// // Dùng DOM để tạo 1 thẻ mới trong JS
// let div_element = document.createElement("div");
// div_element.style.width = "200px";
// div_element.style.height = "200px";
// div_element.style.display = "flex";
// div_element.style.justifyContent = "center";
// div_element.style.alignItems = "center";
// div_element.style.backgroundColor = "green";
// // Thêm 1 thẻ vừa tạo vào HTML
// document.body.appendChild(div_element);

// let p = document.createElement("p");
// p.innerText = "Tôi ở đây";
// p.style.backgroundColor = "red";

// // Thêm vào body
// // document.body.appendChild(p);
// // Thêm vào 1 thẻ hoặc khối nào đó
// div_element.appendChild(p);

//xử lý nút myBtn
let myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", function () {
    let h1 = document.querySelector("h1")
    h1.style.color = "red"
    h1.innerText = "abc";
    console.log("Hello");
});

//xử ly nút create box
let createbox = document.querySelector("#createbox");
createbox.addEventListener("click", function () {
    let div_element = document.createElement("div");
    div_element.style.width = "200px";
    div_element.style.height = "50px";
div_element.style.backgroundColor = "green"
    document.body.appendChild(div_element);
    

});

