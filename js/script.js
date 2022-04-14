//Variables
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const btnAddToCart = document.querySelector("#btn-addtocart");
const productQtyCount = document.querySelector(".count");
const cart = document.querySelector(".cart");
const cartIcon = document.querySelector("#cart-icon");
const productsInCart = document.querySelector(".products-in-cart");
const productName = document.querySelector(".product-name").textContent;
const removeIcon = "";
let productCount = 1;
let productPrice = 250.0;
let productDiscount = 0.5;

let slideIndex = 1;

//Event Listeners
btnPlus.addEventListener("click", incrementProductQty);
btnMinus.addEventListener("click", decrementProductQty);
cartIcon.addEventListener("click", toggleCart);
btnAddToCart.addEventListener("click", addToCart);


function addToCart(){
const appendHTML = `
  <img src="images/image-product-1-thumbnail.jpg" alt="Product Name" id="purchased-product">
    <div class="product-purchased-info">
      <p class="product-purchased-name">${productName}</p>
        <div class="product-total">
          <span id="product-purchased-price">$${productPrice}</span> x <span id="productQty">${productCount}</span> <span class="purchasedTotal">$${(productPrice * productCount).toFixed(2)}</span>
        </div>
      </div>
  <img src="images/icon-delete.svg" alt="remove to cart" class="remove-product-button">
`

productsInCart.innerHTML = appendHTML;

if(productsInCart.style.display == 'none')
{
  productsInCart.style.display = 'block'; 
}
removeIcon = document.querySelector(".remove-product-button");
removeIcon.addEventListener("click", removeToCart);
}

function removeToCart() {
productsInCart.parentNode.removeChild(productsInCart);
}
//Functions
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("productSlides");
  let dots = document.getElementsByClassName("thumbnail");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function incrementProductQty() {
  //console.log(productCounterValue);
  setProductQtyCount(1);
}

function decrementProductQty() {
  setProductQtyCount(-1);
}

function setProductQtyCount(value) {
  if (productCount + value > 0) {
    productCount += value;
    productQtyCount.innerHTML = productCount;
  }
  //console.log(value);
}

function toggleCart() {
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}
