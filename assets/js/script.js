'use strict';

// navbar toggle in mobile

const /** {nodeelement} */ $navbar = document.querySelector("[data-navbar]");
const /** {nodeelement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click",()=> $navbar.classList.toggle("active"));

/**
 * header scroll state
 */

const /**{nodeelement}*/ $Header = document.querySelector("[data-header]");

window.addEventListener("scroll",e=> {
    $Header.classList[window.scrollY>50? "add": "remove"]("active");
})


/**
 * add to favourite button toggle
 */

const /**{nodeelement}*/ $toggleBtns =document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn=>{
    $toggleBtn.addEventListener("click",()=>{
        $toggleBtn.classList.toggle("active");
    });
})