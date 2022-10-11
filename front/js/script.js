// Get products from API
console.log("hello world");
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((products) => card(products));
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


// What is this doing?

function createCard(array) {
  const container = document.getElementById("items");
  const length = array.length;

  for (let i = 0; i < length; i++) {
    const card = createCard(array[i]);
    container.appendChild(card);
  }
}

// function createCard(obj) {
//   const card = document.createElement("section");

//   const name = document.createElement("h2");

//   card.classList.add("card");
//   name.innerHTML = obj.name;

//   card.appendChild(name);

//   return card;
// }
function card(products) {
  console.log(products);

  //TODO Iterate over the products(this is where you create the for loop for the rest of the lines)
  //Examine each property of the product in the current iteration
  //Create a new product html element
  //Create an html element for each product property (only if needed)
  //Add all the html elments for each property to the new product html element

  let section = document.getElementById("items");

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let a = document.createElement("a");
    a.setAttribute("href", `./product.html?id=${product._id}`);

    const card = document.createElement("article");
    a.appendChild(card);

    const img = document.createElement("img");
    const name = document.createElement("h3");

    // Scott added
    name.classList.add("productName");

    const productDescription = document.createElement("p");

    productDescription.classList.add("productDescription");


    name.innerHTML = product.name;
    productDescription.innerHTML = product.description;

    img.setAttribute("src", product.imageUrl);
    img.setAttribute("alt", "product image");

    // document.getElementsByTagName("h2").setAttribute("class", "productName");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(productDescription);

    section.appendChild(a);
  }
//Why is byClassName ok here?

  var cards = document.getElementsByClassName("card");
  console.log(cards);
}


// function productPage() {
//   alert("hi");
// }

// productPage();


// for (let i = 0; i < cards.length; i++) {
//   const card = cards[i];
//   card.addEventListener("click", function () {
//     alert("Hello World!" + i);
//   });
// }




// // Hi there! message at bottom
// // 1. Create <div> element
// let div = document.createElement("div");

// // 2. Set its class to "alert"
// div.className = "alert";

// // 3. Fill it with the content
// div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

// document.body.append(div);
