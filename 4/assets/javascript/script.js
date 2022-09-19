const faqBtns = document.querySelectorAll(".faq__btn");
for (const btn of faqBtns){
    btn.addEventListener("click", function(e){
        const panel = btn.nextElementSibling;
        panel.classList.toggle("active");
        btn.classList.toggle("active")
    })
}


const navToggle = document.querySelector(".nav__toggle");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", function() {
  navToggle.classList.toggle("active");
  header.classList.toggle("active");
  nav.classList.toggle("active");
});



const links = document.querySelectorAll(".scroll-link");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const target = document.querySelector(href);
  const targetOffset = target.offsetTop;
  window.scrollTo({
    top: targetOffset,
    behavior: "smooth",
  });
  navToggle.classList.remove("active");
  header.classList.remove("active");
  nav.classList.remove("active");
}