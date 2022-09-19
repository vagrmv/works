const navButton = document.querySelector(".nav__btn");

navButton.addEventListener("click", function() {
  navButton.classList.toggle("active")
});

const sliderItems = document.querySelectorAll(".testimonals__slider__item")

sliderItems.forEach((item, i) => {
  item.addEventListener("click", function() {

    sliderItems.forEach((item, i) => {
      item.classList.remove("active")
    });
    item.classList.add("active");
    // itemAtts = item.attributes;
    // console.log(itemAtts);
    // itemAtts.forEach((item, i) => {
    //   if (item.name === "data-slider") {
    //     itemId = item.value;
    //   }
    // });



    // itemId = item.id;
    itemId = item.getAttribute("data-slider")
    itemsContent = document.querySelectorAll(".testimonals__item");
    itemsContent.forEach((item, i) => {
      item.classList.remove("active");
      if (itemId === item.id) {
        item.classList.add("active")
      }
    });



  });
});



console.log(navButton);
