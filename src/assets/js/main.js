'use strict';
barsOpen.onclick = () => { document.querySelector('#navSticky').classList.toggle('nav-sticky-block'); };
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
const goods = document.querySelector(".goods div.row");

let product = fetch('https://fakestoreapi.com/products').then(api => api.json()).then(res => {
    res.map(res => {
        let price = Math.round(Number(res.price)) * 2;
        goods.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card product-cards mx-0 my-2 p-2">
                <div class="product-image mb-2 position-relative">
                    <img class="img-fluid" src="${res.image}" alt="product image">
                    <span class="position-absolute bottom-0 bg-custom-info py-1 px-2 start-0 rounded-3"><i class="me-1 fa fa-star"></i>${res.rating.rate}</span>
                </div>
            
                <h4 class="card-title mt-3" title="${res.title}">${res.title}</h4>

                <p class="card-body py-1 fs-6 " title="${res.description}">${res.description}</p>
                
                <div class="d-flex justify-content-between align-items-end">

                    <span class="pt-1 px-2 rounded-3"><del class="del-price">${price} $</del><span class="reduction-box text-white ms-4 mt-5 fw-bold px-1">50%</span><div class="pt-2 h5">${res.price} $</div>
                    </span>

                    <span class="py-2 px-2 rounded-3">${res.rating.count}<i class="ms-1 d-inine fa fa-user-edit"></i></span>
                </div>
            </div>
        </div>`
    })
})