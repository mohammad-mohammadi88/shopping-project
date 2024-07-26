'use strict';
barsOpen.onclick = ()=>{document.querySelector('#navSticky').classList.toggle('nav-sticky-block');};
assignFormOpen.onclick = ()=>{
    assignForm.hidden = false;
    modalFooterAssign.hidden = false;
    modalFooterLogin.hidden = true;
    loginForm.hidden = true
}
loginFormOpen.onclick = ()=>{
    assignForm.hidden = true;
    modalFooterAssign.hidden = true;
    modalFooterLogin.hidden = false;
    loginForm.hidden = false
}