const scrollRevealOption = {
  distance: "500px",
  origin: "bottom",
  duration :1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .btn",{
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__item",{
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".stats__image img",{
  ...scrollRevealOption,
  origin:" right ",
  interval: 500,
});

ScrollReveal().reveal(".stats__card",{
  duration: 500,
  interval: 500,
  delay: 1000,
});

const swiper  = new Swiper(".swiper",{
  loop:true,
  pagination:{
    el:".swiper-pagination",
  },
});