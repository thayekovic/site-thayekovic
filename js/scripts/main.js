var slide_podcast = new Swiper(".slide-portfolio", {
  slidesPerView: 4,
  spaceBetween: 32,
  pagination: {
    el: ".s-portfolio .top .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-portfolio .top .btn-next",
    prevEl: ".s-portfolio .top .btn-prev",
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.1,
    },
    991: {
      slidesPerView: 2.5,
    },
    1100: {
      slidesPerView: 3.5,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

 const btnScrollTop = document.getElementById("js-btn-scroll-top");

btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


 const btnMobile = document.getElementById("js-btn-mobile");

 btnMobile.addEventListener("click", () => {
  btnMobile.classList.toggle("is-active");
  document.documentElement.classList.toggle("menu-opened");
}); 

let typed = new Typed ('.js-words', {
  strings: ['WebDesigner'],
  typeSpeed: 130,
  backSpeed: 130,
  loop: true

});
