/* Java Script for Slider Begins 
 ----------------------------------*/
const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let currentSlide = 0;
let timer;
// in milliseconds
let interval = 10000;

//Set up the slider

function init() {
  /*
    Position 2nd image after first 
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%

    as we load the page we want each img position next to the other
    we set the img.style.left to 0,100,200 
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
      resetTimer();
    });
  }

  navigationDots.children[0].classList.add("active");
}

//Next Button

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
  resetTimer();
});

//Prev Button

prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
  resetTimer();
});

//Go to slide

function goToSlide(slideNumber) {
  slidesContainer.style.transform = "translate(-" + 100 * slideNumber + "%)";

  currentSlide = slideNumber;
  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slide image

  document.querySelector(".slide-image.active").classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  //Set active class for navigation dots
  document.querySelector(".single-dot.active").classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}

// Timed scroll
// May be more efficient than nextBtn.click() since it won't involve resetting the timer.
function moveToNextSlide() {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
}

function resetTimer() {
  clearInterval(timer);
  timer = window.setInterval(() => moveToNextSlide(), interval);
}

timer = window.setInterval(() => moveToNextSlide(), interval);

// function changeImg() {
//   nextBtn.click();
//   setTimeout("changeImg()", 7000);
// }

// setTimeout("changeImg()", 7000);

/* Java Script for Slider Ends 
 ---------------------------------- */

/* Java Script for Reveal on Scroll Begins
 -------------------------------------------- */
window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
/* Java Script for Reveal on Scroll Ends
 -------------------------------------------- */

/* Java Script for Brands Slider Begins 
 -------------------------------------------*/

$(".brand-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

/* Java Script for Brands Slider Ends 
 -------------------------------------------*/
