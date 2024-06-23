


let hour = document.querySelector(".hour");

let date = document.querySelector(".date");

let getObject = JSON.parse(localStorage.getItem("objectdate1"));
if (getObject !== null) {
    console.log(getObject);

    hour.innerHTML = getObject.hour

    date.innerHTML = getObject.date
}

let hour1 = document.querySelector(".hour1");

let date1 = document.querySelector(".date1");

let getObject1 = JSON.parse(localStorage.getItem("objectdate"));
if (getObject1 !== null) {
    console.log(getObject1)

    hour1.innerHTML = getObject1.hour1

    date1.innerHTML = getObject1.date1
}