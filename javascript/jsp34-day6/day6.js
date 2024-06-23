let chan_element = document.querySelector("p");
console.log(chan_element.innerText);
chan_element.innerText = "toi khong bi ham";
chan_element.style.color = "pink";
chan_element.style.backgroundColor = "purple"

let heading_element = document.querySelector("h1");
console.log(heading_element.innerText);
// innerText: Lấy ra giá trị ở trong thẻ, gán giá trị mới vào thẻ
heading_element.innerText = "Nguyễn Danh Phương";
heading_element.innerText = "Hôm nay học vui quá";

// Giá css cho thẻ: element.style.thuộc_tính = "Giá phải ở dạng string"
heading_element.style.backgroundColor = "red";
heading_element.style.display = "inline-block";

// Hàm querySelector() sẽ lấy ra thẻ theo cách gọi của thẻ đó
// trong CSS. VD: #id, .class, tên thẻ

// Bài 1:
let p_element = document.querySelector("p");
p_element.innerText = "Tôi ko bị hâm";
p_element.style.color = "pink";
p_element.style.backgroundColor = "purple";
p_element.style.display = "inline-block";

// Dùng DOM để tạo 1 thẻ mới trong JS
let div_element = document.createElement("div");
div_element.style.width = "200px";
div_element.style.height = "200px";
div_element.style.backgroundColor = "green";
div_element.style.display = "flex";
div_element.style.justifyContent = "center";
div_element.style.alignItemsc = "center";
// Thêm 1 thẻ vừa tạo vào HTML
document.body.appendChild(div_element);

// ** Tạo 1 thẻ img
let img_element = document.createElement("img");
img_element.style.width = "100px";
img_element.src =
"https://i.pinimg.com/474x/15/b7/95/15b7957340ae33661dc49ba963fc5376.jpg";
div_element.appendChild(img_element);

// ** Tạo 1 thẻ a
let a_element = document.createElement("a");
a_element.innerText = "Dẫn tới trang youtube";
a_element.href = "https://www.youtube.com/";
a_element.target = "_blank";
document.body.appendChild(a_element);
// Phân biệt innerHTML và innerText
//innerHTML:đọc được tag name
//innnertext:ko đọc được tag name
let container = document.querySelector (".container");
container.innerHTML = "<h2>hello</h2>";
// Gán sự kiện cho 1 thẻ

