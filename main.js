// Carousel selectors
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");
const carouselTrack = document.querySelector(".carousel-track");
const carouselOuter = document.querySelector(".carousel-outer");
const cards = Array.from(carouselTrack.children);

// Obtain width of the first card
const cardWidth = cards[0].getBoundingClientRect().width;

const slidePosition = (card, index) => {
  card.style.left = cardWidth * index + "px";
};

cards.forEach(slidePosition);

// Disable arrows if at either end of carousel
const nextArrowInactive = (card) => {
  if (!card.classList.contains("last-card")) {
    nextArrow.classList.remove("arrow-inactive");
  } else if (card.classList.contains("last-card")) {
    nextArrow.classList.add("arrow-inactive");
  }
};

const prevArrowInactive = (card) => {
  if (!card.classList.contains("first-card")) {
    prevArrow.classList.remove("arrow-inactive");
  } else if (card.classList.contains("first-card")) {
    prevArrow.classList.add("arrow-inactive");
  }
};

// Move between cards
const moveToCard = (track, currentCard, targetCard) => {
  track.style.transform = `translateX(-${targetCard.style.left})`;
  currentCard.classList.remove("current-card");
  targetCard.classList.add("current-card");
  prevArrowInactive(targetCard);
  nextArrowInactive(targetCard);
};

// Next arrow functionality
nextArrow.addEventListener("click", (e) => {
  const currentCard = carouselTrack.querySelector(".current-card");
  const nextCard = currentCard.nextElementSibling;

  moveToCard(carouselTrack, currentCard, nextCard);
});

// Previous arrow functionality
prevArrow.addEventListener("click", (e) => {
  const currentCard = carouselTrack.querySelector(".current-card");
  const prevCard = currentCard.previousElementSibling;

  moveToCard(carouselTrack, currentCard, prevCard);
});

// Making Carousel Responsive
const responsive1 = (width) => {
  if (width.matches) {
    carouselOuter.style.width = `950px`;
    cards[3].classList.remove("last-card");
    cards[4].classList.add("last-card");
  } else {
    carouselOuter.style.width = `1425px`;
    cards[4].classList.remove("last-card");
    cards[3].classList.add("last-card");
    nextArrowInactive(cards);
  }
};
const responsive2 = (width) => {
  if (width.matches) {
    carouselOuter.style.width = `475px`;
    cards[4].classList.remove("last-card");
    cards[5].classList.add("last-card");
  } else {
    carouselOuter.style.width = `1425px`;
    cards[5].classList.remove("last-card");
    cards[4].classList.add("last-card");
    nextArrowInactive(cards);
  }
};

const media1 = window.matchMedia(`(max-width: 1550px)`);
const media2 = window.matchMedia(`(max-width: 1073px)`);

media1.addEventListener("change", () => {
  responsive1(media1);
});
media2.addEventListener("change", () => {
  responsive2(media2);
});
