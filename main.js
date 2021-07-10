const carouselCont = document.querySelector(".carousel-container");
const carouselSlider = document.querySelector(".carousel-slider");
const cards = document.querySelectorAll(".card");

const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

let counter = 1;
const width = cards[0].clientWidth + 16;

carouselSlider.style.transform = `translateX(-${width * counter}px`;

prevArrow.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlider.style.transform = "translateX(" + -width * counter + "px)";
});

nextArrow.addEventListener("click", () => {
  if (counter >= cards.length - 2) return;
  carouselSlider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlider.style.transform = "translateX(" + -width * counter + "px)";
});

carouselSlider.addEventListener("transitionend", () => {
  if (cards[counter].id === "last-clone") {
    carouselSlider.style.transition = "none";
    counter = cards.length - 3;
    carouselSlider.style.transform = "translateX(" + -width * counter + "px)";
  }

  if (cards[counter].id === "first-clone") {
    carouselSlider.style.transition = "none";
    counter = cards.length - counter - 1;
    carouselSlider.style.transform = "translateX(" + -width * counter + "px)";
  }
});

const reduceCarouselSize1 = (media) => {
  if (media.matches) {
    carouselCont.style.width = `950px`;
  } else {
    carouselCont.style.width = `1425px`;
  }
};
const reduceCarouselSize2 = (media) => {
  if (media.matches) {
    carouselCont.style.width = `475px`;
  } else {
    carouselCont.style.width = `950px`;
  }
};

const media1 = window.matchMedia(`(max-width: 1550px)`);
media1.addListener(reduceCarouselSize1);
reduceCarouselSize1(media1);

const media2 = window.matchMedia(`(max-width: 1070px)`);
media2.addListener(reduceCarouselSize2);
reduceCarouselSize2(media2);
