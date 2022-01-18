input1 = document.querySelector(".input1");

input3 = document.querySelector(".input3");

signin = document.querySelector(".signin");

//get values

var userName = localStorage.getItem("username");
var pass = localStorage.getItem("password");

signin.addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value == "" || input3.value == "") {
    alert("please enter data to sign in :)");
  } else {
    if (
      userName &&
      input1.value === userName &&
      pass &&
      input3.value === pass
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    } else {
      alert("please enter correct data to sign in :)");
    }
  }
});
