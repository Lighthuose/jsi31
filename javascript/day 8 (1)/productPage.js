
      document.getElementById("submitComment").onclick = function name(params) {
        let Comment1 = document.getElementById("commentInput").value;
        var txt3 = document.createElement("br")
        document.getElementById("comment").append(Comment1);
        document.getElementById("comment").append(txt3);
        commentInput.value = "";
      };
      
