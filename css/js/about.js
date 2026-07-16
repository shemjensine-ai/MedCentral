// Reveal animation when scrolling

const sections = document.querySelectorAll(
".box, .card, .numbers div"
);


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let position =
section.getBoundingClientRect().top;


if(position < window.innerHeight - 80){

section.classList.add("show");

}


});


});