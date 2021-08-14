
/* Java Script for Slider Begins 
 ----------------------------------*/
const slideImage = document.querySelectorAll('.slide-image');
const slidesContainer = document.querySelector('.slides-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const navigationDots = document.querySelector('.navigation-dots');

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

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

    slideImage.forEach((img,i) => {
        img.style.left = i * 100 + '%';
    });

    slideImage[0].classList.add('active');

    creatNavigationDots()
}

init();

// Create navigation dots 

function creatNavigationDots() {
    for (let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('single-dot');
        navigationDots.appendChild(dot);      
        
        dot.addEventListener('click', () => {
            goToSlide(i);
        })
    }

    navigationDots.children[0].classList.add('active')
}

//Next Button

nextBtn.addEventListener('click', ()=> {
    if(currentSlide >= numberOfImages -1){
        goToSlide(0);
        return;
    }

    currentSlide++;
    goToSlide(currentSlide);
});

//Prev Button

prevBtn.addEventListener('click', ()=> {
    if(currentSlide <= 0){
        goToSlide(numberOfImages - 1);
        return;
    }

    currentSlide--;
    goToSlide(currentSlide);
});

//Got To slide

function goToSlide(sldeNumber) {
    slidesContainer.style.transform = 'translate(-' +
    slideWidth * sldeNumber + 'px)';

    currentSlide = sldeNumber;
    setActiveClass();
}

// Set Active Class

function setActiveClass() {
    // Set ative class for Slide image

    let currentActive = document.querySelector('.slide-image.active');
    currentActive.classList.remove('active');
    slideImage[currentSlide].classList.add('active');

    //Set active class for navigation dots
    let currentDot = document.querySelector('.single-dot.active');
    currentDot.classList.remove('active');
    navigationDots.children[currentSlide].classList.add('active');
}

/* Java Script for Slider Ends 
 ---------------------------------- */


 /* Java Script for Reavel on Scroll Begins
 -------------------------------------------- */
 window.addEventListener('scroll', reveal);
 function reveal() {
     var reveals = document.querySelectorAll('.reveal')

     for (let i = 0; i < reveals.length; i++) {
         
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
     }
 }
 /* Java Script for Reavel on Scroll Ends
 -------------------------------------------- */


 /* Java Script for Brands Slider Begins 
 -------------------------------------------*/

 $('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  }) 
  

  /* Java Script for Brands Slider Ends 
 -------------------------------------------*/