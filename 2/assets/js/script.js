// Burger menu
const navButton = document.querySelector(".nav__toggle");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

navButton.addEventListener("click", function() {
  navButton.classList.toggle("active");
  header.classList.toggle("active");
  nav.classList.toggle("active");
});


// Fixed menu
const introHeight = document.querySelector(".intro").clientHeight;

window.addEventListener("scroll", function() {
  if(window.pageYOffset > (introHeight / 5 * 3)){
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});


// Scroll to element
const linksToScroll = document.querySelectorAll("[data-scroll]")
for(let link of linksToScroll){
  link.addEventListener("click", function(event) {
    event.preventDefault();
    let linkOffset = document.getElementById(link.dataset.scroll).offsetTop;
    window.scrollTo({
      top: linkOffset - 53, //53 - height of fixed header
      behavior: "smooth",
    });
  });
}


//Chapter visibility
const filterCheckBoxes = document.querySelectorAll("[data-chapter]");
for(let checkBox of filterCheckBoxes){
  checkBox.addEventListener("click", function() {checkBoxToggle(checkBox)});
  checkBoxToggle(checkBox); //this is to initial chapter visibility
}

function checkBoxToggle(chckbx){
  if (chckbx.checked){
    document.getElementById(chckbx.dataset.chapter).classList.add("visible");
  } else {
    document.getElementById(chckbx.dataset.chapter).classList.remove("visible");
  }
}


// Slider "stuf"
function splitListToPages(list, itemsInPageNumber){
  let items = list.children;
  let itemsInPage = [];

  let index = 0;
  for(let item of items){
    // console.log(item);

    if(index % itemsInPageNumber === 0){
      itemsInPage.push([item]);
    } else {
      let temp = (index - (index % itemsInPageNumber)) / itemsInPageNumber;
      // console.log(temp);
      itemsInPage[temp].push(item);
    }
    index += 1;
  }

  return itemsInPage;
}

function showCurrentPage(pagesList, currentPage){
  for(let page of pagesList){
    for(let item of page){
      item.classList.remove("visible");
    }
    for(let item of pagesList[currentPage]){
      item.classList.add("visible");
    }
  }
}

function updatePageIndicators(indicators, curPageNum, allPagesNum){
  indicators[0].textContent = curPageNum;
  indicators[1].textContent = allPagesNum;
}

// Initialise sliders
const sliderSections = document.querySelectorAll(".store__chapter-content");
const sliders = [];
for(let section of sliderSections){
  // console.log("new slider");
  slider = {
    list: section.querySelector(".store__chapter-list"),
    nav: section.querySelector(".store__chapter-nav"),
    currentPage: 0,
    itemsInPageNumber: 3,
    pagesList: splitListToPages(section.lastElementChild, 3),
    pageIndicators: section.querySelector(".store__chapter-nav").querySelectorAll(".store__chapter-nav-num span")
  }
  sliders.push(slider);
}

//Aded page toggle func to btns
for(let slider of sliders){
  let prevPageBtn = slider.nav.querySelector(".store__chapter-nav-btn.prev");
  prevPageBtn.addEventListener("click", function() {
    slider.currentPage -= 1;
    if(slider.currentPage < 0){
      slider.currentPage = slider.pagesList.length - 1;
    }
    showCurrentPage(slider.pagesList, slider.currentPage);
    updatePageIndicators(slider.pageIndicators, slider.currentPage + 1, slider.pagesList.length);
  });

  let nextPageBtn = slider.nav.querySelector(".store__chapter-nav-btn.next");
  nextPageBtn.addEventListener("click", function() {
    slider.currentPage += 1;
    if(slider.currentPage >= slider.pagesList.length){
      slider.currentPage = 0;
    }
    showCurrentPage(slider.pagesList, slider.currentPage);
    updatePageIndicators(slider.pageIndicators, slider.currentPage + 1, slider.pagesList.length);
  });

  showCurrentPage(slider.pagesList, slider.currentPage); //for initial
  updatePageIndicators(slider.pageIndicators, slider.currentPage + 1, slider.pagesList.length);
}
