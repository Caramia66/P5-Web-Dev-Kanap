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

  //TODO Insert price

  //TODO Insert color option. Iterate over product colors (for Loop) append to Select tag
}

//MILESTONE 7
//TODO Add event listener to add to cart button
//TODO create function to handle click event. Use "add to cart"function name
//TODO add to cart function needs to get, color and quantity selected
