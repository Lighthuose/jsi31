//function: một khối mã được thiết kế để thực hiện một tác vụ cụ thể.
//function được thực thi khi "thứ gì đó" gọi nó (gọi nó).
//Hàm JavaScript được xác định bằng functiontừ khóa, theo sau là tên , theo sau là dấu ngoặc đơn () .
//Các dấu ngoặc đơn có thể bao gồm các tên tham số được phân tách bằng dấu phẩy:( tham số1, tham số2, ... )
//Mã được hàm thực thi được đặt bên trong dấu ngoặc nhọn: {}
function printResult() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
printResult();

function printName(block) {
    console.log("xin chào " + block);
}
total(1, 1);//2
total(1, 3);//4
printName("block");

function total(a, b) {
    console.log(a + b);
}
total(1, 4);//5

function signal(x, y) {
    console.log(x);
    console.log(y);
    return x - y;
    //return:trả về một số
}
console.log("kết quả hiệu: " + signal(10, 3));

function non(a, b, c) {
let min = a;
if(b < min) min = b;
if(c < min) min = c;
return min
}
console.log("GTNN là " + non(1,2,3));
console.log("GTNN " + non(5,4,6));
console.log("GTNN " + non(8,7,2));