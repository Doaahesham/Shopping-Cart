links = document.getElementById("links");
user_info = document.getElementById("user-info");
user = document.getElementById("user");
logout = document.getElementById("logout");

if (localStorage.getItem("username")) {
  links.remove();
  user_info.style.display = "flex";
  user.innerHTML = "welcome " + localStorage.getItem("username") + " :)";
}

logout.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 2000);
});
