// GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById("cart_n");
// DIVS
var fruitDIV = document.getElementById("fruitDIV");
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");
//INFORMATION
var COURSE = [
  { name: "CSC108", price: 50 },
  { name: "PSY100", price: 50 },
  { name: "PSY100 labs", price: 20 },
  { name: "AST201", price: 40 },
  { name: "SOC200", price: 45 },
  { name: "MGT401", price: 60 }
];
var VIDEO = [
  { name: "CSC108 List loop ", price: 10 },
  { name: "CSC108 Midterm review", price: 20 },
  { name: "CSC108 Lecture summary", price: 15 }
];
var NOTES = [
  { name: "CSC108 python midterm summary", price: 10 },
  { name: "PSY100 textbook summary", price: 10 },
  { name: "AST201 final exam notes", price: 15 }
];
//HTML
function HTMLfruitProduct(con) {
  let URL = `../img/course/course${con}.jpg`;
  let btn = `btnFruit${con}`;
  return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text"> <b> ${COURSE[con - 1].name} </b></p>
                    <p class="card-text">Price: ${COURSE[con - 1].price}.00$</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${COURSE[con - 1].name}','${COURSE[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${COURSE[con - 1].name}','${COURSE[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted"> Course available </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function HTMLjuiceProduct(con) {
  let URL = `img/video/video${con}.jpg`;
  let btn = `btnJuice${con}`;
  return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text"> <b> ${VIDEO[con - 1].name} </b> </p>
                    <p class="card-text">Price: ${VIDEO[con - 1].price}.00$</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${VIDEO[con - 1].name}','${VIDEO[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a href="/cart" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${VIDEO[con - 1].name}','${VIDEO[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Purchase available </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function HTMLsaladProduct(con) {
  let URL = `img/notes/note${con}.png`;
  let btn = `btnSalad${con}`;
  return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <i style="color:orange;" class="fa fa-star"  ></i>
                    <p class="card-text"><b> ${NOTES[con - 1].name}</b> </p>
                    <p class="card-text">Price: ${NOTES[con - 1].price}.00$</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${NOTES[con - 1].name}','${NOTES[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" ><a href="/cart" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${NOTES[con - 1].name}','${NOTES[con - 1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Purchase available </small>
                    </div>
                </div>
            </div>
        </div>
    `;
}
//ANIMATION
function animation() {
  const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000
  });
  toast({
    type: "success",
    title: "Added to shopping cart"
  });
}
// CART FUNCTIONS
function cart(name, price, url, con, btncart) {
  var item = {
    name: name,
    price: price,
    url: url
  };
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }
  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;
  document.getElementById(btncart).style.display = "none";
  animation();
}
function cart2(name, price, url, con, btncart) {
  var item = {
    name: name,
    price: price,
    url: url
  };
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }
  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;
  document.getElementById(btncart).style.display = "none";
}

(() => {
  for (let index = 1; index <= 6; index++) {
    fruitDIV.innerHTML += `${HTMLfruitProduct(index)}`;
  }
  for (let index = 1; index <= 3; index++) {
    juiceDIV.innerHTML += `${HTMLjuiceProduct(index)}`;
    saladDIV.innerHTML += `${HTMLsaladProduct(index)}`;
  }
  if (localStorage.getItem("cart") == null) {
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
  }
})();
