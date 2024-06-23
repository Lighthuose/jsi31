
let h2_element = document.createElement("h2");
h2_element.innerText = "hello,";
document.body.appendChild(h2_element)

let p_element = document.createElement("p");
p_element.innerText = "Please click the button below to verify your email address.";
document.body.appendChild(p_element)

let div_element = document.createElement("button");
div_element.innerText = "Verify Email Address";
div_element.di
div_element.style.width = "200px";
div_element.style.height = "50px";
div_element.style.background = "blue";
div_element.style.color = "white";
document.body.appendChild(div_element);

let heading_element = document.createElement("p");
heading_element.innerText = "You o may alscopy and paste this link in your web browser:";
document.body.appendChild(heading_element);

let a_element = document.createElement("h3");
a_element.innerText = "https://auth.udacity.com/verify-email?email=nguyendanhphuong0305%40gmail.com&code=7e6ae1ccf8b89ab1f144d39e98bbec700eb68878e97db379fe13f44417ad787d8cb0d5a177e336a8e5d4990959d485b8bcb10eefacdf97de6d148ed4a8861cf15a8f5dfca8e6ee30d17071b8257105f2310097ffb82115c34555&next=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fsql-for-data-analysis--ud19";
a_element.href = "https://auth.udacity.com/verify-email?email=nguyendanhphuong0305%40gmail.com&code=7e6ae1ccf8b89ab1f144d39e98bbec700eb68878e97db379fe13f44417ad787d8cb0d5a177e336a8e5d4990959d485b8bcb10eefacdf97de6d148ed4a8861cf15a8f5dfca8e6ee30d17071b8257105f2310097ffb82115c34555&next=https%3A%2F%2Fwww.udacity.com%2Fcourse%2Fsql-for-data-analysis--ud19";
a_element.target = "_blank";
a_element.style.color = "blue"
document.body.appendChild(a_element);

let b_element = document.createElement("a");
b_element.innerText = "To ensure that you receive future emails from us, please add Udacity toyour email contacts..";
document.body.appendChild(b_element);