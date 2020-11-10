// variables
const cartItems = document.querySelector(".navbar__cartCount");
const cartBtn = document.querySelector(".cartButton");
const size = document.querySelector("size");
const productS = document.querySelector(".product__small");
const productM = document.querySelector(".product__medium");
const productL = document.querySelector(".product__large");

cartBtn.addEventListener("click", addToCart);
productS.addEventListener("click", updateSize);
productM.addEventListener("click", updateSize);
productL.addEventListener("click", updateSize);

function addToCart(event) {
  event.preventDefault();

  let itemCount = 0;

  cartItems.classList.toggle("total");
  if (cartItems.classList.contains("total")) {
    itemCount++;
  }

  cartItems.innerText = itemCount;
}

function updateSize(event) {
  event.preventDefault;
}
