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
  // console.log(productId);
  // console.log(JSON.parse(localStorage.getItem("cart")));

  const selectedProduct = {
    quantity: parseInt(quantity),
    color: color,
    sofaId: productId,
  };

  // Get cart from local storage
  let cartContents = JSON.parse(localStorage.getItem("cart"));

  if (cartContents !== null && cartContents.length > 0) {
    const existingCartItem = cartContents.find(
      (item) =>
        item.sofaId === selectedProduct.sofaId &&
        item.color === selectedProduct.color
    );

    if (existingCartItem) {
      //if yes, then increase the quantity (scenario 3)
      existingCartItem.quantity =
        selectedProduct.quantity + existingCartItem.quantity;
      console.log(existingCartItem);
    } else {
      //if no, push the cart item (scenario 2)

      cartContents.push(selectedProduct);
      console.log(cartContents);
    }
  } else {
    // Scenario #1 Cart doesn't exist or is empty/Done
    cartContents = [];
    cartContents.push(selectedProduct);
    console.log(cartContents);
  }
  //Store in Local storage
  localStorage.setItem("cart", JSON.stringify(cartContents));
});
