input1 = document.querySelector(".input1");
input2 = document.querySelector(".input2");
input3 = document.querySelector(".input3");
signup = document.querySelector(".signin");

//get values

signup.addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "" || input3.value == "") {
    alert("please enter data to sign up :)");
  } else {
    localStorage.setItem("username", input1.value);
    localStorage.setItem("email;", input2.value);
    localStorage.setItem("password", input3.value);

    setTimeout(() => {
      window.location ="index.html";
    }, 2000);
  }
});
