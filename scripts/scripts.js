// ============DARK THEME =======
const themeButton = document.getElementById('theme-button');
const darkTheme= 'dark-theme';
const iconTheme = 'uil-sun';

//PREV selected theme
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'uil-moon'?'add':'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ==============MENU SHOW/HIDE =========
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

console.log("menu")

if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}

const navlink = document.querySelectorAll(".nav__link")

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))
console.log("remove")



//=====================Typewritere Effect ===============



new Typewriter('#typewriter', {
  strings: ['Nageswaran', 'Web-developer', 'Software Engineer'],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("TypeWriter")


//=====================Portfolio Swiper ===============

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable:true,
    },
    keyboard: true,
  });

console.log("Swipper")

//=====================Scroll up ===============

function scrollup(){
    const scrollup = document.getElementById("scroll-up");
    if(this.scrollY >= 560){
        scrollup.classList.add('show-scroll');
    } else {
        scrollup.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollup);

const sections= document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);