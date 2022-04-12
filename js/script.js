//Variables
const btnPlus = document.querySelector('#btn-plus');
const btnMinus = document.querySelector('#btn-minus');
const productQtyCount = document.querySelector('.count');
const cart = document.querySelector('.cart');
const cartIcon = document.querySelector('#cart-icon');
let productCount = 1;
let productPrice = 250.0;
let productDiscount = 0.5;

let slideIndex = 1;

//Event Listeners
btnPlus.addEventListener('click', incrementProductQty);
btnMinus.addEventListener('click', decrementProductQty);
cartIcon.addEventListener('click', toggleCart);


//Functions
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function incrementProductQty() {
  //console.log(productCounterValue);
  setProductQtyCount(1);
}

function decrementProductQty() {
  setProductQtyCount(-1);
}

function setProductQtyCount(value) {
  if ((productCount + value) > 0) {
      productCount += value;
      productQtyCount.innerHTML = productCount;
  }
  //console.log(value);
}

function toggleCart(){
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}
