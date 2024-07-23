'use strict';
addEventListener('scroll',()=>{document.getElementById('navSticky').style.opacity = document.documentElement.scrollTop > 95 ? '0.6' : '1'});
barsOpen.onclick = ()=>{document.querySelector('#navSticky ul').classList.toggle('nav-sticky-block')};
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