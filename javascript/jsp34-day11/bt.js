//let có thể thay đổi 1 giá trị của biến
//const ko thể thay đổi 1 giá trị của biến
//tên biến không bao giờ được giống nhau
//string :tập hợp của nhiều kí tự  và chúng phải được viết trong ""
//vd :"dang"
//number:giá trị ở dạng số và không cần ""
//vd: 1,2,3,4,123,2.3
//boolean: nhận giá trị "true" hoặc "false"
//vd

// let name = "haidang";
// name = "phuong";
// console.log("tôi tên là "+name);
// let age = 30;
// console.log("tôi "+age+" tuổi");

//let school = prompt("trường tôi là ");
//console.log(school)

//let address = prompt("địa chỉ của trường tôi là:");
//console.log(address);
//let classname = prompt("tên của lớp tôi là:")
//console.log(classname)

//+ ; - ; * ; / ; % ; **
//%:chia lấy dư
//**:dấu mũ
//Math.sqrt( x ) :căn bậc 2 
//"chú thích x là số cần ghi"

//let a = 10;
//console.log(a);
//let b = "20";
// b = Number(b);
// console.log(b);
//  let sum = a+b;
// console.log("sum = "+sum)
// console.log("tổng của a+b là " + sum)
// console.log("tổng của "+a+" và "+b+" là "+sum)
//một số + với 1 chuỗi ra số mới gồm số và chuỗi

// let a = prompt("enter a: ");
// let b = prompt("enter b:");
// let c = prompt("enter c: ");
// a = Number(a);
// b = Number(b);
// c = Number(c);
// let p = (a+b+c)/2;
// let d = Math.sqrt( p*(p - a)*(p - b)*(p - c))
// console.log(d)

// let a = prompt("enter a : ");
// let b =a*2;
// console.log(b);

// let a = prompt("enter a: ");
// let b = prompt("enter b:");
// let c = prompt("enter c: ");
// a = Number(a);
// b = Number(b);
// let d = (a-b)*c;
// console.log(d);

//chú thích:câu so sánh và các phép so sánh
/** > :ss lớn hơn
 *  < :ss bé hơn
 * >= :ss lớn hơn hoặc bằng
 * <= :ss bé hơn hoặc bắng
 *  == : ss bằng nhau "chỉ ss giá trị và ko quan tâm đến kiểu dữ liệu"
 * != :ss khác nhau
 */ 
// let a = 10;
// let b = "10";
// let c = a===b ;
// console.log(c);

// let choose = prompt(
//     "[1].Classic \n[2]. ghost \n[3]. shorty \n[4]. frenzy \n[5]. sheriff \n Enter choose: "
//   );

// if(choose == 1) {
//     console.log("classic")
// } else if (choose == 2) {
//     console.log("ghost")
// } else if (choose == 3) {
//     console.log("shorty")
// } else if (choose == 4) {
//     console.log("frenzy")
// } else if (choose == 5) {
//     console.log("sheriff")
// }

// let score = prompt("nhập điểm vào đây: ");

//   if (score < 0 && score > 10 ) {
//     console.log("print sai khoảng điểm")
// } else if (score >= 0 && score < 5 ){
//     console.log("Điểm E")
// } else if (score >= 5 && score < 6 ){
//     console.log("Điểm D")
// } else if (score >=6 && score < 7 ){
//     console.log("Điểm C")
// } else if (score >=7 && score < 8 ){
//     console.log("Điểm B")
// } else if (score >=8 && score < 9 ){
//     console.log("Điểm A")
// } else if (score >=9 && score == 10 ){
//     console.log("Điểm A+")
// }

// let a = prompt("Enter a: ");
// let b = prompt("Enter b: ");
// let c = prompt("Enter c: ");
//  if ( b < c && a < c ){
//     console.log("the greatest number is "+c)
//  } else if ( b < a && c < a ){
//     console.log("the greatest number is "+a)
//  } else if ( a < b && c < b ){
//     console.log("the greatest number is "+b)
//  } 

// let day = prompt(
//     "[0] Sunday \n[1] Monday \n[2] Tuesday \n[3] Wednesday \n[4] Thursday \n[5] Friday \n[6] Saturday \nEnter Day: "
// );
//  if (day == 0){
//     console.log("Sunday")
//  } else if (day ==1){
//     console.log("Monday")
//  } else if (day ==2){
//     console.log("Tuesday")
//  } else if (day ==3){
//     console.log("Wednesday")
//  } else if (day ==4){
//     console.log("Thursday")
//  } else if (day ==5){
//     console.log("Friday")
//  } else if (day ==6){
//     console.log("Saturday")
//  }

// xâu liền nhau
// let a = prompt("Enter: ");
// let b = a + a;
// console.log(b)

// số gấp đôi 
// let a = prompt("enter a : ");
// let b =a*2;
// console.log(b);

//gấp đôi
// let a = prompt("Enter a: ");
// a = Number(a)
// let b = a *2 ;
// console.log (b)

// let Name = prompt("Enter Name: ");
// if (Name == "Ronaldo"){
//     alert("King")
// } else if (Name =="Messi"){
//     alert("Goat")
// } else if (Name == "Phương"){
//     alert("Vua Bóng Đá")
// } else if (Name != "Ronaldo" &&  Name!="Messi" && Name!="Phương" )
//     alert("tên không tìm thấy")

//   array
