const swiperPhotographers = new Swiper('.photographers .swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
