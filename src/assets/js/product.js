"use strict";

//get id of product
const urlParams = new URLSearchParams(window.location.search);
let greetingValue = urlParams.get('id');
greetingValue = Number(greetingValue);
console.log('product id is : ' + greetingValue);

// variables
const productPage = document.getElementById('productPage');
const productDetail = document.getElementById('productDetail');
const number = document.getElementById('number');
const priceShow = document.getElementById('priceShow');
const othergoods = document.querySelector('#goods div.row');
const searchInput = document.getElementById('search');
const searchOverlay = document.getElementById('overlay');
const blow = document.getElementById('brow');

// fetch fakeapistore.com
let searchWords = ["electronics","jewelery","men's clothing","women's clothing","all"];
let fetchAPI = fetch(`https://fakestoreapi.com/products`).then(api => api.json());
let categories = fetch('https://fakestoreapi.com/products/categories').then(api => api.json());

// nav sticky toggle
barsOpen.onclick = () => {document.querySelector('#navSticky').classList.toggle('nav-sticky-block')};

// product detail show
fetchAPI.then(api=>{return api.filter(el=>el.id == greetingValue)}).then(res=>{
    console.log(res);
    res.map(el=>{
        productPage.innerHTML = el.category;
        console.log(el);
        let price = Math.round(Number(el.price)) * 2;
        productDetail.innerHTML = `<div class="row"><div class="col-md-8 col-sm-6 col-12 position-relative"><div class="row justify-content-between"><div class="col-6"><span class="px-3"><i class="fa fa-heart fa-lg text-danger"></i><i class="fa px-1 fa-share-nodes fa-lg text-primary"></i></span></div><div class="col-6 mt-1" dir="rtl"><h4>${el.title}</h4></div></div><div class="row my-3" dir="rtl"><h5> ${el.category}</h5></div><div class="row my-4 ps-3"><p class="text-start productDetailDescriptopn" title="${el.description}">${el.description}</p></div><div class="row fs-5 ps-3 justify-content-between"><div class="col"><span class="mx-1">${el.rating.rate}</span><i class="fa fa-star text-warning"></i></div><div class="col" dir="rtl"><i class="fa fa-user-edit"></i><span class="mx-1">${el.rating.count}</span></div></div><div class="product-price d-flex justify-content-between position-absolute w-100 align-items-end mt-5 me-2" dir="rtl"><div class="col"><button type="button" data-bs-toggle="modal" data-bs-target="#cartAddModal" id="productSubmit" class="btn btn-success fw-bold btn-custom-success">افزودن به سبد خرید</button><!-- Modal --><div class="modal fade" id="cartAddModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> این محصول به سبد خرید شما افزوده شد</div><div class="modal-footer"><a href="cart.html" class="btn btn-danger">برو به سبد خرید</a></div></div></div></div></div><div class="col ps-2 " dir="ltr"><div class="d-flex justify-content-between align-items-end"><span class="pt-1 px-2 rounded-3"><del class="del-price">${price} $</del><span class="reduction-box text-white ms-4 mt-5 fw-bold px-1">50%</span><div class="pt-2 h4">${el.price} $</div></span></div></div></div></div><div class="col-md-4 col-sm-6 col-12"><div class="w-100 py-4 px-5"><img class="img-fluid productDetail-image" alt="product image" src="${el.image}"></div></div></div>`;
        console.log(el);
        productSubmit.onclick = function(){
            window.scrollTo(0,0);
            let arr = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : []
            arr.push(el)
            localStorage.setItem('product',JSON.stringify(arr))
        }
    });
});

// nav bottom modal 
function top0(){window.scrollTo(0,0)};

// same category products
setTimeout(()=>{
fetchAPI.then(res=>{
    return res.filter(el=>el.id != greetingValue && el.category == productPage.innerHTML)
}).then(el=>{
    el.map(res=>{
        console.log(res);
        let price = Math.round(Number(res.price)) * 2;
        othergoods.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 product" title="${res.category}"><a class="text-decoration-none text-dark" href="productDetail.html?id=${res.id}"><div class="card product-cards mx-0 position-relative my-3 p-2"><h5 class="mb-5 position-absolute product-header text-muted bg-white">${res.category}</h5><div class="product-image mb-2 mt-3 position-relative"><img class="img-fluid" src="${res.image}" alt="product image"><span class="position-absolute bottom-0 bg-custom-info py-1 px-2 start-0 rounded-3"><i class="me-1 fa fa-star"></i>${res.rating.rate}</span></div><h4 class="card-title mt-3" title="${res.title}">${res.title}</h4><p class="card-body py-1 fs-6 " title="${res.description}">${res.description}</p><div class="d-flex justify-content-between align-items-end"><span class="pt-1 px-2 rounded-3"><del class="del-price">${price} $</del><span class="reduction-box text-white ms-4 mt-5 fw-bold px-1">50%</span><div class="pt-2 h5">${res.price} $</div></span><span class="py-2 px-2 rounded-3">${res.rating.count}<i class="ms-1 d-inine fa fa-user-edit"></i></span></div></div></a></div>`;
    });
})
// loading
.then(()=>{body.hidden = false;
    loading.hidden = true;
    console.log(localStorage.getItem('product'))
})
},2000);

// footer categories
categories.then(res=>{
    res.map(res=>{
        footerCategory.innerHTML += `<li class="list-unstyled py-1 text-decoration-none text-white">${res}</li>`;
    })
});