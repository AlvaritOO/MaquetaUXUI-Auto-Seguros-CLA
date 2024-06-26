
const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 150
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 150
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 0
    },

    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1150: {
      slidesPerView: 4,
      spaceBetween: 10
    }

  },



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}
);
const swiperdesktop = new Swiper('.swiper-desktop', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 150
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 150
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 150
    },

    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 150
    },
    // when window width is >= 640px
    1150: {
      slidesPerView: 2,
      spaceBetween: 150
    }

  },



  // If we need pagination
  pagination: {
    el: '.swiper-pagination-desktop',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar-desktop',
  },
}
);