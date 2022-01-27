links = document.getElementById("links");
user_info = document.getElementById("user-info");
user = document.getElementById("user");
logout = document.getElementById("logout");
productsInfo = document.querySelector(".products");

// console.log(productsInfo);

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

let products = [
  {
    id: 1,
    title: "coffe machine",
    description: "Lorem ipsum dolor sit amet consecteisi dolore!",
    size: "large",
    imageUrl: "images/coffeemachine.png",
  },
  {
    id: 2,
    title: "cattle",
    description: "Lorem ipsum dolor sit amet consecteisi dolore!",
    size: "medium",
    imageUrl: "images/katl.png",
  },
  {
    id: 3,
    title: "madrb",
    description: "Lorem ipsum dolor sit amet consecteisi dolore!",
    size: "large",
    imageUrl: "images/madrb.png",
  },
  {
    id: 4,
    title: "botgaz",
    description: "Lorem ipsum dolor sit amet consecteisi dolore!",
    size: "medium",
    imageUrl: "images/botgaz.png",
  },
];

// draw

function draw() {
  let productsUi = products.map((item) => {
    return `
    <div class="product-itm">
    <img
      src="${item.imageUrl}"
      alt="img"
      class="product-itm-img"
    />
    <div class="product-itm-desc">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <span>size: ${item.size}</span>
    </div>
    <div class="product-itm-actions">
      <button class="Add-to-Cart">Add to Cart</button>
      <i class="fav far fa-heart"></i>
    </div>
  </div>
  `
  });

  productsInfo.innerHTML = productsUi;
}
draw();
