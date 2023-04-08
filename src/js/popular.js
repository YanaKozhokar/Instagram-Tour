const slidesAmount = () => {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    return 2;
  } else {
    return 4;
  }
};

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  slidesPerView: slidesAmount(),

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});
