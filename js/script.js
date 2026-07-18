// ===============================
// STRIKON SPORTS
// Main JavaScript
// ===============================

// Sticky Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});

/* ===============================
   PRODUCT IMAGE GALLERY
================================*/

const products = {

1:{
title:"Strikon Elite (TB-01)",
images:[
"../../../images/football/TB1-01.jpg",
"../../../images/football/TB1-02.jpg",
"../../../images/football/TB1-03.jpg",
"../../../images/football/TB1-04.jpg"
]
},

2:{
title:"Strikon Pro Match (TB-02)",
images:[
"../../../images/football/TB2-01.jpg",
"../../../images/football/TB2-02.jpg",
"../../../images/football/TB2-03.jpg",
"../../../images/football/TB2-04.jpg"
]
},

3:{
title:"Strikon Velocity (TB-03)",
images:[
"../../../images/football/TB3-01.jpg",
"../../../images/football/TB3-02.jpg",
"../../../images/football/TB3-03.jpg",
"../../../images/football/TB3-04.jpg"
]
}

};

function changeImage(img){

document.getElementById("mainProductImage").src = img.src;

document.querySelectorAll(".thumbnail-gallery img")
.forEach(i=>i.classList.remove("active"));

img.classList.add("active");

}

function loadProduct(id){

const thumbs=document.querySelectorAll(".thumbnail-gallery img");

thumbs.forEach((img,index)=>{

img.src=products[id].images[index];

img.classList.remove("active");

});

thumbs[0].classList.add("active");

document.getElementById("mainProductImage").src=products[id].images[0];

const title=document.getElementById("productTitle");

if(title){

title.innerHTML=products[id].title;

}

const hero=document.getElementById("top-product");

if(hero){

hero.scrollIntoView({

behavior:"smooth"

});

}

}
