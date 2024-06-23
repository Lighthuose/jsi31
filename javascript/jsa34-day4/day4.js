let food1 = "Bún chả";
let food2 = "Bánh mì";
let food3 = "Phở bò";

// Để tạo 1 mảng thì các giá trị trong mảng phải được để trong ngoặc [value1, value2,...] và ngăn cách bởi dấu ","
let list_food = ["Bún chả", "cơm rang", "Phở bò", "hehe"];
//                   0          1          2        3

// Cách để truy cập vào mảng và lấy ra giá trị: tên_mảng[vị_trí]
// Ví trị các phần tử trong mảng được đế, từ số 0
console.log(list_food[1]); // => Bánh mì

// Thay thế 1 phần tử trong mảnh: tên_mảng[vị trí] = giá trị mới
list_food[1] = "Cơm rang";
console.log(list_food); //=> ["Bún chả", "Cơm rang", "Phở bò"];

// Cách để lấy số lượng phần tử trong mảng: tên_mảng.length
console.log(list_food.length); // => 3

// Cách để thêm mới 1 phần tử trong mảng:
// list_food[list_food.length] = "Ha Ha";
list_food.push("Giá trị mới");
console.log(list_food);
// Xóa 1 phần tử cuối trong mảng: tên_mảng.pop()
list_food.pop();
console.log(list_food);

console.log(" tôi muốn ăn " + list_food[0] +" , " +list_food[1] + " và "  +list_food[2])

console.log(" tôi muốn ăn "  + list_food[2] +" , " +list_food[1] + " và "  +list_food[0])

let tems = list_food[0]
list_food[0]=list_food[2];
list_food[2]=tems;

console.log(list_food);

let index = Number(
    prompt(`Enter a number from 0 to ${list_food.length - 1}: `)
  );
  
  if (index >= 0 && index <= list_food.length - 1) {
    alert(`Giá trị ở vị trí ${index} là ${list_food[index]}`);
  } else {
    alert("Kiểm tra lại dữ liệu đầu vào");
}

for (let i =1 ; i>=1 ; i=-1){
    console.log(i)
}

let number = [5, 90, 9, 35, 69, 89,120 ]  ;
for (i=0 ;i<=(number.length-1);i++){
    console.log(number[i])
}

    

