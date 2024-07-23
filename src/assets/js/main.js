'use strict';
addEventListener('scroll',()=>{document.getElementById('navSticky').style.opacity = document.documentElement.scrollTop > 95 ? '0.6' : '1'});
barsOpen.onclick = ()=>{document.querySelector('#navSticky ul').classList.toggle('nav-sticky-block')};