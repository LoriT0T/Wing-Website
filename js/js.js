wingLogoSvg = document.querySelector('svg#wingLogo')
    wingLogoText = wingLogoSvg.querySelector('path#logoText')

    wingLogoSvg.addEventListener('mouseenter', (e) => {
      wingLogoText.setAttribute('fill', 'url(#paint0_linear)')
    })

    wingLogoSvg.addEventListener('mouseleave', (e) => {
      wingLogoText.setAttribute('fill', '#006080')
    })

    wingLogoSvg.onclick = ()=> location.href = '/static/Wing.html'

    document.querySelectorAll('.product-image').forEach(productImage=>{
      productImage.addEventListener('mouseenter', (e) => {
        productImage.querySelector('.primary-image').classList.add('hidden')
        productImage.querySelector('.secondary-image').classList.remove('hidden')
      })

      productImage.addEventListener('mouseleave', (e) => {
        productImage.querySelector('.secondary-image').classList.add('hidden')
        productImage.querySelector('.primary-image').classList.remove('hidden')
      })
      
    })

    
 /* Event Listener on Drop-Down Menu Begins
 ----------------------------------------*/
 var boys = document.querySelector('.boys')
    document.getElementById("drop-down-background-boys").addEventListener("mouseover", function() {
      boys.classList.add('dropdown-hover')
  });  
  document.getElementById("drop-down-background-boys").addEventListener("mouseout", function() {
      boys.classList.remove('dropdown-hover')
  });

  var girls = document.querySelector('.girls')
    document.getElementById("drop-down-background-girls").addEventListener("mouseover", function() {
      girls.classList.add('dropdown-hover')
  });   
  document.getElementById("drop-down-background-girls").addEventListener("mouseout", function() {
      girls.classList.remove('dropdown-hover')
  });

  var infants = document.querySelector('.infants')
    document.getElementById("drop-down-background-infants").addEventListener("mouseover", function() {
      infants.classList.add('dropdown-hover')
  });
  document.getElementById("drop-down-background-infants").addEventListener("mouseout", function() {
      infants.classList.remove('dropdown-hover')
  });

  var sales = document.querySelector('.sales')
    document.getElementById("drop-down-background-sales").addEventListener("mouseover", function() {
      sales.classList.add('dropdown-hover')
  }); 
  document.getElementById("drop-down-background-sales").addEventListener("mouseout", function() {
      sales.classList.remove('dropdown-hover')
  });
  
 /* Event Listener on Drop-Down Menu Ends
 ----------------------------------------*/

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
  loop: false,
  margin: 10,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 2,
    },
    600: {
      items: 3,
    },
    900: {
      items: 4,
    },
  },
});

/* Java Script for Brands Slider Ends 
 -------------------------------------------*/

/* Hamburger Menu Begin
 -------------------------------*/
 sidebarMenu = document.querySelector(".sidebar-menu");
 overlay = document.querySelector(".overlay");
 hamburger = document.querySelector(".hamburger");

 
 hamburger.addEventListener('click', e => {
   sidebarMenu.classList.remove('hidden')
   overlay.classList.remove('hidden')
 })

 document.querySelectorAll('.sidebar-menu .sidebar-category > .collapsible-button').forEach(x=>{
   x.addEventListener('click', (e)=>{        
     // Parent element is the sidebar category
     sidebarMenuCategory = x.parentElement
     currentActiveCategory = document.querySelector('.sidebar-category.active')
     // Check if the currentActive category is the same as the clicked category
     // If not then deactivate active category and subcategory.
     if (currentActiveCategory && currentActiveCategory != sidebarMenuCategory){
       // Deactivate active category and subcategory
       currentActiveCategory.querySelector('.active')?.classList.remove('active')
       currentActiveCategory.classList.remove('active')
     }
     sidebarMenuCategory.classList.toggle('active')
   })
 })

 document.querySelectorAll('.sidebar-menu .sidebar-subcategory > .collapsible-button').forEach(x => {
   x.addEventListener('click', (e)=>{
     sidebarMenuSubcategory = x.parentElement
     currentActiveSubcategory = document.querySelector('.sidebar-subcategory.active')

     if (currentActiveSubcategory && currentActiveSubcategory != sidebarMenuSubcategory){
       currentActiveSubcategory.classList.remove('active')
     }
     
     sidebarMenuSubcategory.classList.toggle('active')
   })
 });

 // You can close the side menu by clicking the x-button or anywhere other than the sidemenu

 document.querySelector('.close-sidemenu-button img').addEventListener('click', (e)=>{
   closeSidebarMenu()
 })

 overlay.addEventListener('click', (e)=>{
   closeSidebarMenu()
 })

 function closeSidebarMenu(){
   document.querySelectorAll('.sidebar-menu .active').forEach(activeElement=>{
     activeElement.classList.remove('active')
   })
   sidebarMenu.classList.add('hidden')
   overlay.classList.add('hidden')
 }
 
 function mediaCloseSidebarMenu(x){
  if (x.matches){
    closeSidebarMenu()
  }
}
window.matchMedia("(min-width: 1100px)").addListener(mediaCloseSidebarMenu)
 /* Hamburger Menu Ends
 -------------------------------*/
 

