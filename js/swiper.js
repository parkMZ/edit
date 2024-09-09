const mainVisualSwiper = new Swiper(".main-visual-swiper", {
  effect: "fade",
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const productSwiper = new Swiper(".main-wrap .product-swiper", {
  loop: true,
  slidesPerView: 3.4,
  spaceBetween: 40,
  speed: 700,
  autoplay: {
    delay: 3000,
  },
  slidesOffsetBefore: 130,
  breakpoints: {
    // 640: {
    //   slidesOffsetBefore: 100, // 640px 이상일 때
    // },
    // 1024: {
    //   slidesOffsetBefore: 200, // 1024px 이상일 때
    // },
    1921: {
      slidesOffsetBefore: 450, // 1440px 이상일 때
      slidesPerView: 4.5,
    },
  },
});

// if (lineUp.classList.contains("active")) {
//   productSwiper.autoplay.start();
// } else {
//   productSwiper.autoplay.stop();
// }
