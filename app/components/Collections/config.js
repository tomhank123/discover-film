export const getSwiperOptions = hasCounter => ({
  spaceBetween: 16,
  slidesPerView: 3,
  loop: false,
  freeMode: true,
  breakpoints: {
    576: {
      slidesPerView: hasCounter ? 2 : 3,
    },
    768: {
      slidesPerView: hasCounter ? 2 : 4,
    },
    992: {
      slidesPerView: hasCounter ? 3 : 5,
    },
    1200: {
      slidesPerView: hasCounter ? 4 : 6,
    },
    1400: {
      slidesPerView: hasCounter ? 4 : 7,
    },
  },
});

export default {
  spaceBetween: 16,
  slidesPerView: 3,
  loop: false,
  freeMode: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 7,
    },
  },
};
