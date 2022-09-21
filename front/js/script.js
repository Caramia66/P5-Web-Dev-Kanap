// Get products from API
console.log("hello world");
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => console.log(data));
//create a single article as shown below off of data index 0
//document.createElement

// Create each product section

/* <a href="./product.html?id=42">
<article>
  <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1"></img>
  <h3 class="productName">Kanap name1</h3>
  <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
</article>
</a> */

// 1. Create <div> element
let div = document.createElement("div");

// 2. Set its class to "alert"
div.className = "alert";

// 3. Fill it with the content
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div);

function createCard(array) {
  const container = document.getElementById("items");
  const length = array.length;

  for (let i = 0; i < length; i++) {
    const card = createCard(array[i]);
    container.appendChild(card);
  }
}

function createCard(obj) {
  const card = document.createElement("section");

  const name = document.createElement("h2");

  card.classList.add("card");
  name.innerHTML = obj.name;

  card.appendChild(name);

  return card;
}
// function createCard(obj) {
//   const card = document.createElement('section');

//   const img = document.createElement('img');
//   const name = document.createElement('h2');
//   const price = document.createElement('p');

// card.classList.add('card');
// name.innerHTML = obj.name;
// price.innerText = obj.price;

// img.setAttribute('src', obj.imageUrl);
// img.setAttribute('alt', 'product image');

// card.appendChild(img);
// card.appendChild(name);
// card.appendChild(price);

// return card;

// }
