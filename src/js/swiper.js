new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
  },
});
