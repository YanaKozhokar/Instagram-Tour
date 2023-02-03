import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

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

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

// var swiper = new Swiper('.gallery__swiper', {
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//   },
//   loop: true,
// });

// var swiper = new Swiper('.review__swiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
