
document.getElementById("submitComment").onclick = function name(params) {
  let Comment1 = document.getElementById("commentInput").value;
  var txt3 = document.createElement("br")
  document.getElementById("comment").append(Comment1);
  document.getElementById("comment").append(txt3);
  commentInput.value = "";
};


let hourinput = document.getElementById("hourinput");

let dateinput = document.getElementById("dateinput");

let button = document.querySelector(".button");

button.addEventListener("click", function () {

  if (hourinput.value === "" || dateinput.value === "") {
    alert("bạn thuê không thành công");

  } else if (hourinput.value !== "" && dateinput.value !== "") {
    alert("bạn thuê thành công");
    let objectdate = {
      hour: hourinput.value,
      date: dateinput.value,
    }
    localStorage.setItem("objectdate1", JSON.stringify(objectdate));
  }

  console.log(hourinput.value);

  console.log(dateinput.value);
})

