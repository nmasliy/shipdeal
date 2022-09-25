import Swiper, { Pagination, Navigation } from 'swiper';

Swiper.use([Navigation, Pagination]);

function initMobileSlider(parent, wrapper, items, breakpoint = 768) {
  if (window.innerWidth <= breakpoint) {
    const $parent = document.querySelector(parent);
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    $parent.classList.add("swiper");
    $wrapper.classList.add("swiper-wrapper");
    $wrapper.classList.remove(wrapper.replace('.',''));
    $items.forEach((slide) => slide.classList.add("swiper-slide"));

    const swiper = new Swiper(parent, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

const reviews = new Swiper('.reviews__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },
});

const ship = new Swiper('.ship__slider', {
  slidesPerView: 3,
  spaceBetween: 0,
  navigation: {
    nextEl: '.ship__next',
    prevEl: '.ship__prev',
  },
  pagination: {
    el: '.ship__pagination',
    clickable: true
  },
  watchSlidesProgress: true,
});
