"use strict";
// variables

const goods = document.querySelector(".goods div.row");
const footerCategory = document.getElementById('footerCategory');
const productFilter = document.getElementById('productFilter');
const searchInput = document.getElementById('search');
const searchOverlay = document.getElementById('overlay');
const blow = document.getElementById('brow');

// fetch fakeapistore.com
let searchWords = ["electronics","jewelery","men's clothing","women's clothing","all"];
let product = fetch('https://fakestoreapi.com/products').then(api => api.json());
let categories = fetch('https://fakestoreapi.com/products/categories').then(api => api.json());

// nav sticky toggle
barsOpen.onclick = () => {document.querySelector('#navSticky').classList.toggle('nav-sticky-block')};

// modal forms
assignFormOpen.onclick = () => {
    assignForm.hidden = false;
    modalFooterAssign.hidden = false;
    modalFooterLogin.hidden = true;
    loginForm.hidden = true
}
loginFormOpen.onclick = () => {
    assignForm.hidden = true;
    modalFooterAssign.hidden = true;
    modalFooterLogin.hidden = false;
    loginForm.hidden = false
}
// products show

product.then(res => {
    res.map(res => {
        let price = Math.round(Number(res.price)) * 2;
        goods.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 product" title="${res.category}"><a class="text-decoration-none text-dark" href="productDetail.html?id=${res.id}"><div class="card product-cards mx-0 position-relative my-3 p-2"><h5 class="mb-5 position-absolute product-header text-muted bg-white">${res.category}</h5><div class="product-image mb-2 mt-3 position-relative"><img class="img-fluid" src="${res.image}" alt="product image"><span class="position-absolute bottom-0 bg-custom-info py-1 px-2 start-0 rounded-3"><i class="me-1 fa fa-star"></i>${res.rating.rate}</span></div><h4 class="card-title mt-3" title="${res.title}">${res.title}</h4><p class="card-body py-1 fs-6 " title="${res.description}">${res.description}</p><div class="d-flex justify-content-between align-items-end"><span class="pt-1 px-2 rounded-3"><del class="del-price">${price} $</del><span class="reduction-box text-white ms-4 mt-5 fw-bold px-1">50%</span><div class="pt-2 h5">${res.price} $</div></span><span class="py-2 px-2 rounded-3">${res.rating.count}<i class="ms-1 d-inine fa fa-user-edit"></i></span></div></div></a></div>`;
    })
});
// categories for footer and datalist
categories.then(res=>{
    res.map(res=>{
        footerCategory.innerHTML += `<li class="list-unstyled py-1 text-decoration-none text-white">${res}</li>`;
        blow.innerHTML += `<option value="${res}">`
    })
});
// category searchInput
searchInput.addEventListener('input',()=>{
    let isChanged = searchWords.some((word)=>{
        if(searchInput.value.length !== 0 && word.startsWith(searchInput.value)){
            searchOverlay.innerText = word;
            return true
        }
    });
    if(!isChanged){
        searchOverlay.innerText = ''
    }
});
searchInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        if(searchInput.value === "all"){
            product.then(res => {
                res.map(res => {
                    let price = Math.round(Number(res.price)) * 2;
                    goods.innerHTML += `
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 product" title="${res.category}"><a class="text-decoration-none text-dark" href="productDetail.html?id=${res.id}"><div class="card product-cards mx-0 position-relative my-3 p-2"><h5 class="mb-5 position-absolute product-header text-muted bg-white">${res.category}</h5><div class="product-image mb-2 mt-3 position-relative"><img class="img-fluid" src="${res.image}" alt="product image"><span class="position-absolute bottom-0 bg-custom-info py-1 px-2 start-0 rounded-3"><i class="me-1 fa fa-star"></i>${res.rating.rate}</span></div><h4 class="card-title mt-3" title="${res.title}">${res.title}</h4><p class="card-body py-1 fs-6 " title="${res.description}">${res.description}</p><div class="d-flex justify-content-between align-items-end"><span class="pt-1 px-2 rounded-3"><del class="del-price">${price} $</del><span class="reduction-box text-white ms-4 mt-5 fw-bold px-1">50%</span><div class="pt-2 h5">${res.price} $</div></span><span class="py-2 px-2 rounded-3">${res.rating.count}<i class="ms-1 d-inine fa fa-user-edit"></i></span></div></div></a></div>`;
                })
            });
        }
        if(searchOverlay.innerText.length > 0){
            searchInput.value = searchOverlay.innerText;
            goods.innerHTML = '';
            product.then(res=>{
                return res.filter(el=>el.category == searchInput.value);
            })
            .then(res=>{
                res.map(res=>{
                let price = Math.round(Number(product.price)) * 2;
                    goods.innerHTML +=`
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 product" title="${res.category}"><a class="text-decoration-none text-dark" href="productDetail.html?id=${res.id}"><div class="card product-cards mx-0 position-relative my-3 p-2"><h5 class="mb-5 position-absolute product-header text-muted bg-white">${res.category}</h5><div class="product-image mb-2 mt-3 position-relative"><img class="img-fluid" src="${res.image}" alt="product image"><span class="position-absolute bottom-0 bg-custom-info py-1 px-2 start-0 rounded-3"><i class="me-1 fa fa-star"></i>${res.rating.rate}</span></div><h4 class="card-title mt-3" title="${res.title}">${res.title}</h4><p class="card-body py-1 fs-6 " title="${res.description}">${res.description}</p><div class="d-flex justify-content-between align-items-end"><span class="pt-1 px-2 rounded-3"><del class="del-price">${price} $</del><span class="reduction-box text-white ms-4 mt-5 fw-bold px-1">50%</span><div class="pt-2 h5">${res.price} $</div></span><span class="py-2 px-2 rounded-3">${res.rating.count}<i class="ms-1 d-inine fa fa-user-edit"></i></span></div></div></a></div>`
                })
            })
        };

    }
});

// nav bottom modal 
function top0(){window.scrollTo(0,0)};

// loading
setTimeout(()=>{
    body.hidden = false;
    loading.hidden = true
},2000)