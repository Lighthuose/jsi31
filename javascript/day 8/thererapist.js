let container = document.querySelectorAll(".container");
let containertitle = document.querySelectorAll(".container h2")
console.log(containertitle)
let input = document.querySelector("#search-text");
let button = document.querySelector("#search-btn");
console.log(button);
input.addEventListener("keyup", function (e) {
    e.preventDefault()
    for (let i = 0; i < containertitle.length; i++) {
        if (containertitle[i].innerText.indexOf(input.value) > -1) {
            container[i].style.display = "block"
        } else if (containertitle[i].innerText.indexOf(input.value) < 0) {
            container[i].style.display = "none"
        }

    }
})

//b1:lấy nút từ HTML sang JS để xử lí mình có thể dừng lấy qua class hoặc Id
//lấy qua Id: document.querySelector("#")  
//lấy qua class: document.querySelector(".")
//chú thích: lấy 1 thẻ ;còn thêm "all"thì lấy nhiều thẻ

let order = document.querySelectorAll(".button")
console.log(order);
// if ( order   ){
//     alert("xí chỗ thành công");
// }
//chú tính querySelecttorAll trả về 1 mảng chứa các thẻ gọi theo các gọi selector
for (let i = 0 ; i < order.length; i++){
    order[i].addEventListener("click",function(e){
        alert("xí chỗ thành công")
    })
}

