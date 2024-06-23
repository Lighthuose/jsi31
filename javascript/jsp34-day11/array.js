//mảng :dùng để chứa nhiều phần phần tử lại với nhau ,nhóm lại
let kho_do = ["ak47", "gatlinggun", "m24", "glass ", "spacetre"]

//hàm trả về số lượng phần tử trong mảng : tên mảng.lengeth
console.log(kho_do.length);//=)

//truy cập vào các phần tử trong mảng tên mảng[vị trí]
console.log(kho_do[kho_do.length - 1])
//4 = 5 - 1 //<=> ten mảng.length - 1
console.log(kho_do.length - 1)

//truy cập vào phần tử trong mảng : tên mảng[vị trí]
//truy cập vào cuối :tên mảng[teen mảng.length - 1]

//thêm 1 phần tử mới trong mảng : tên mảng.push(giá trị mới)

//thêm mới vào

//in cái mảng sau khi thêm ra

kho_do.push(5);
console.log(kho_do);

// x = vị trí của phần tử cần sửa, x là số
// sửa 1 phần tử trong mảng : tên mảng[x] = giá trị mới

kho_do[5] = "stinger";
console.log(kho_do)

//hàm xóa đi 1 phần tử cuối mảng : tên mảng.pop()

kho_do.pop();
console.log(kho_do);

let number = [2, 4, 987, 8, 55, 10];
console.log(number[0] + number[1] + number[2] + number[3] + number[4] + number[5]);
console.log(number[0] + number[2] + number[4]);

// let index = prompt("nhập vị trí phần tử muốn in:");
// if (index == 0) {
//     console.log(number[0])
// } else if (index == 1) {
//     console.log(number[1])
// }  else if (index == 2) {
//     console.log(number[2])
// } else if (index == 3) {
//     console.log(number[3])
// } else if (index == 4) {
//     console.log(number[4])
// } else if (index == 5) {
//     console.log(number[5])
// } else if ( index > 5 || index < 0){
//     console.log("ko co gì")
// }

// let n1 = prompt("vị trí số 1: ")
// let n2 = prompt("vi trí số 2: ")
// console.log(number [n1] + number[n2]  );

// let array = ["Hải", "Quý", "Quyết", "Minh", "Sơn", "Tín","An","Duy"]
// console.log(array[1] , array[3] , array[5] , array[7] );

// let input = prompt("enter name: ");
//     console.log(input);

//  array.push(input)
// console.log(array)

// if (input == ""){
//     console.log("bạn ơi bạn chưa nhập")
// } else  {
//     console.log(array);
// }

// let list_product = 
//     {
//         name: "Wardrobe",
//         price: 82,
//         availability: false,
//         id: "11",
//         category: "shirt",
//       }
// console.log(list_product.category)

let list_product = [
    { name: "Chair", price: 26, availability: false, id: "1", category: "shirt" },
    { name: "Cup", price: 7, availability: true, id: "2", category: "shoes" },
    { name: "Table", price: 64, availability: true, id: "3", category: "shirt" }
]
console.log(list_product[0].name)
console.log(list_product[1].name)
console.log(list_product[2].name)

if (list_product[0].price > list_product[1].price && list_product[0].price > list_product[2].price) {
    console.log(list_product[0].name)
} else if (list_product[1].price > list_product[0].price && list_product[1].price > list_product[2].price) {
    console.log(list_product[1].name)
} else if (list_product[2].price > list_product[0].price && list_product[2].price > list_product[1].price) {
    console.log(list_product[2].name)
}
