links = document.getElementById("links");
user_info = document.getElementById("user-info");
user = document.getElementById("user");

if (localStorage.getItem("username")) {
  links.remove();
  user_info.style.display = "block";
  user.innerHTML = "welcome "+ localStorage.getItem("username") + " :)";
}
