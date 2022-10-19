// Get products from API
console.log("hello world");
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((bananas) => card(bananas));

function card(products) {
  console.log(products);

  let section = document.getElementById("items");

  // for (let i = 0; i < products.length; i++) {
  // let product = products[i];
  for (let product of products) {
    let a = document.createElement("a");
    a.setAttribute("href", `./product.html?id=${product._id}`);

    const card = document.createElement("article");
    a.appendChild(card);

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

    section.appendChild(a);
  }

  var cards = document.getElementsByClassName("card");
  console.log(cards);
}
