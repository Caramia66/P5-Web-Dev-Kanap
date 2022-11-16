//Get cart from local storage
const cartContents = JSON.parse(localStorage.getItem("cart"));
console.log(cartContents);

// Get product info for each cart item (from API) in the cart and save in new array
// Iterate over the cart items in the cart
for (let cartItem of cartContents) {
  fetch(`http://localhost:3000/api/products/${cartItem.sofaId}`)
    .then((response) => response.json())
    .then((product) => insertCartItemCard(product, cartItem));
}

//TODO For each cart item, insert cart item card on page using info from both the cart and products retrieved previously
let section = document.getElementById("cart__items");
function insertCartItemCard(product, cartItem) {
  console.log(product);
  console.log(cartItem);
  const article = document.createElement("article");
  //TODO add class to article tag
  // article.classList.add("anotherclass");
  //TODO add dataset keys to article tag
  //article.dataset.id="...."

  article.innerHTML = `
    <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photo of a sofa">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Name of the product</h2>
                    <p>Green</p>
                    <p>€${product.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Delete</p>
                    </div>
                  </div>
                </div>`;
 section.appendChild(article);
}
