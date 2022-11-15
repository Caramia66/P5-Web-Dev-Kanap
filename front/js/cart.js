
// Get products from API
console.log("hello world");
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((bananas) => card(bananas));

  
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
console.log(queryString);

const productId = urlParams.get("id");
console.log(productId);

fetch(`http://localhost:3000/api/products/${productId}`)
  .then((response) => response.json())
  .then((product) => cartContents(product));

  // let cartContents = JSON.parse(localStorage.getItem("cart", JSON.stringify(cartContents)));


  let cartContents = JSON.parse(localStorage.getItem("cart"));

  console.log(cartContents);

  for (let i = 0; i < localStorage.length; i++) {
    const color = cartContents.color.value;
    const quantity = localStorage.quantity;
    const productId = localStorage.productId;
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", product.colors[i]);
    optionElement.innerText = product.colors[i];
    colorsElement.appendChild(optionElement);
  }


const productHolder = document.querySelector("cart__item__img");
productHolder.appendChild(localStorage.getItem("sofaId.imageUrl"));

localStorage.setItem("cart", JSON.stringify(cartContents));

function card(products) 


  let section = document.getElementsByClassName("cart__item");

  // for (let i = 0; i < products.length; i++) {
  // let product = products[i];
  for (let product of products) {
    let article = document.createElement("article");
    article.setAttribute("href", `./product.html?id=${product._id}`);

    const card = document.createElement("article");
    article.appendChild(card);

    const img = document.createElement("img");
    const name = document.createElement("h3");

    name.classList.add("productName");

    const productDescription = document.createElement("p");

    productDescription.classList.add("productDescription");

    name.innerHTML = product.name;
    productDescription.innerHTML = product.description;

    img.setAttribute("src", product.imageUrl);
    img.setAttribute("alt", "product image");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(productDescription);

    section.appendChild(article);
  };