// "use strict";

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
console.log(queryString);

const productId = urlParams.get("id");
console.log(productId);

fetch(`http://localhost:3000/api/products/${productId}`)
  .then((response) => response.json())
  .then((product) => toCart(product));

function toCart(product) {
  const imageHolder = document.querySelector(".item__img");
  const imageTag = document.createElement("img");
  imageTag.setAttribute("src", product.imageUrl);
  imageTag.setAttribute("alt", product.altTxt);
  imageHolder.appendChild(imageTag);

  const productName = document.getElementById("title");
  productName.innerText = product.name;

  const productDescription = document.getElementById("description");
  productDescription.innerText = product.description;

  const productPrice = document.getElementById("price");
  productPrice.innerText = product.price;

  for (let i = 0; i < product.colors.length; i++) {
    const colorsElement = document.getElementById("colors");
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", product.colors[i]);
    optionElement.innerText = product.colors[i];
    colorsElement.appendChild(optionElement);
  }

  //MILESTONE 7
}
const clickAddToCart = document.getElementById("addToCart");

clickAddToCart.addEventListener("click", () => {
  var quantity = document.getElementById("quantity").value;
  var color = document.getElementById("colors").value;
  console.log(productId);
  console.log(JSON.parse(localStorage.getItem("cart")));
  //TODO
  // Add item to cart
  // note cart items are unique dut to ID and color
  const cartItem = {
    quantity: quantity,
    //TODO Add ID and color
  };
  // Store in local storage
  const cartArray = []; // TODO move out of function or you'll have empty cart
  cartArray.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cartArray));
  //TODO
  // Scenario #1 Cart doesn't exist or is empty
  // Scenario #2 Cart exists but item selected is not in it yet
  // Scenario #3 Check if product has been added to cart (if statement and condtion)
  //              Increase quantity of existing cart item
});

// var newArray [color, quantity];

// local storage
// getItem(key) - will get the item at the given key value.
// key(index) - finds the key value at the given index.
// setItem(key, value) - will allow you to store a key and a value.
// removeItem(key) - removes the item at the given key value.
// clear() - removes everything.
// length - will return you the length of the list of stored items.
