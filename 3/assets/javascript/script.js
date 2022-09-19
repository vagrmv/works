// Breakpoints
// @px990: 990px;
// @px768: 768px;
// @px575: 575px;
// @px400: 400px;
// @px650: 650px;
const bpoint990 = 990;
const bpoint768 = 768;
const bpoint650 = 650;
const bpoint575 = 575;
const bpoint400 = 400;


const navToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header__nav");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", function() {
  navToggle.classList.toggle("active");
  headerNav.classList.toggle("active");
  nav.classList.toggle("active");
});



const headerPhone = document.querySelector(".header__phone");
const headerFeedback = document.querySelector(".header__feedback");
const headerFeedbackContent = headerFeedback.innerHTML;
const headerFeedbackContent2 = '<i class="fas fa-phone-alt"></i>';
const headerContacts = document.querySelector(".header__contacts");
window.addEventListener("resize", checkAdaptiv);
checkAdaptiv();

function checkAdaptiv(){
  // console.log(window.innerWidth);
  if(document.documentElement.getBoundingClientRect().width < bpoint990){
    // Nav stuff
    navToggle.after(headerPhone);
    headerPhone.after(headerFeedback);
    headerFeedback.classList.remove("btn--slim");
    headerFeedback.classList.add("btn--reversecolor");
    headerFeedback.innerHTML = headerFeedbackContent2;
  }else {
    //Nav stuff
    headerContacts.append(headerPhone);
    headerContacts.append(headerFeedback);
    headerFeedback.classList.remove("btn--reversecolor");
    headerFeedback.classList.add("btn--slim");
    headerFeedback.innerHTML = headerFeedbackContent;
  }
}
