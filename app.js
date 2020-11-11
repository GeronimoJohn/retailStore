// variables
const cartItems = document.querySelector(".navbar__cartCount");
const cartBtn = document.querySelector(".cartButton");
const size = document.querySelector(".size");
const productS = document.querySelector(".product__small");
const productM = document.querySelector(".product__medium");
const productL = document.querySelector(".product__large");

productS.addEventListener("click", (event) => {
  let shirtSize = "S";
  size.innerText = shirtSize;
});
productM.addEventListener("click", (event) => {
  let shirtSize = "M";
  size.innerText = shirtSize;
});
productL.addEventListener("click", (event) => {
  let shirtSize = "L";
  size.innerText = shirtSize;
});

let itemAmount = 0;

// Everytime we pressed the add to cart it updates the amount of the item
cartBtn.addEventListener("click", (event) => {
  itemAmount++;
  cartItems.innerText = itemAmount;
});
