// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();


document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});


});


});



// Hero animation

window.onload=()=>{

document.querySelector(".hero-text")
.classList.add("show");


};