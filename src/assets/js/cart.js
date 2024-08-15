"use strict";

// variables
const cartProduct = document.querySelector("#cartProducts div.row");
let categories = fetch("https://fakestoreapi.com/products/categories").then(api => api.json());
let result = JSON.parse(localStorage.getItem("product"));
let cardNumber = document.getElementsByClassName("cardNumber");
let changePrice = document.getElementById("changePrice");

// nav sticky toggle
barsOpen.onclick = ()=>{document.querySelector("#navSticky").classList.toggle("nav-sticky-block")};

// show product
result.map(res=>{
    let price = res.price;
    cartProduct.innerHTML += `
    <div class="card flex-row col-12 p-4 my-1 gap-2" dir="rtl">
    <div class="row">
    <div class="col-12 col-sm-6 col-md-4 p-4 border-dotted"><img src="${res.image}" class="img-fluid" alt="resuct image"></div>
    <div class="col-12 col-sm-6 col-md-8 position-relative mt-2 mt-sm-0">
        <h4 class="card-title cardTitle" dir="rtl">${res.title}</h4>
        <h5 class="my-4" dir="rtl">${res.category}</h5>
        <p class="cardDescription">${res.description}</p>
        <div class="d-flex position-absolute bottom-0 justify-content-between">
            <div class="d-flex"><span class="fs-4 numberOfProduct fw-bold">تعداد</span><input type="number" value="1" min="1" max="5" id="changePrice" class="cardNumber fs-5 btn mx-2"><span class="resultPrice fs-5">${price}$</span></div>
        </div>
    </div>
    </div>
    </div>`;
});

// reckoning button
document.getElementById("reckoning").onclick =()=>{localStorage.removeItem("product")};

// footer categories
categories.then(res => {
    res.map(res => {
        footerCategory.innerHTML += `<li class="list-unstyled py-1 text-decoration-none text-white">${res}</li>`
    })
})