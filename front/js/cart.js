const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
console.log(queryString);

const productId = urlParams.get("id");
console.log(productId);

fetch(`http://localhost:3000/api/products/${productId}`)
  .then((response) => response.json())
  .then((product) => cartContents(product));

const imageHolder = document.querySelector("cart__item__img");
imageHolder.appendChild(localStorage.getItem("sofaId.imageUrl"));
