const productItems = document.querySelectorAll(
  ".product-wrap .product-swiper img"
);

const productSwiper = new Swiper(
  ".product-wrap .tab-items li:nth-child(1) .product-swiper",
  {
    loop: true,
    slidesPerView: 2.9,
    spaceBetween: 40,
    speed: 700,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },
    slidesOffsetBefore: 140,
  }
);

const productSwiper2 = new Swiper(
  ".product-wrap .tab-items li:nth-child(2) .product-swiper",
  {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    speed: 700,
    autoplay: {
      delay: 2500,
    },
  }
);

productItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const animatedSrc = e.target.getAttribute("data-animated");
    e.target.setAttribute("src", animatedSrc);
    // productSwiper.autoplay.stop(); // swiper 자동 재생 멈춤
  });

  item.addEventListener("mouseleave", (e) => {
    const staticSrc = e.target.getAttribute("data-static");
    e.target.setAttribute("src", staticSrc);
    // productSwiper.autoplay.start(); // swiper 자동 재생 다시 시작
  });
});

productItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const animatedSrc = e.target.getAttribute("data-animated");
    e.target.setAttribute("src", animatedSrc);
    // productSwiper2.autoplay.stop(); // swiper 자동 재생 멈춤
  });

  item.addEventListener("mouseleave", (e) => {
    const staticSrc = e.target.getAttribute("data-static");
    e.target.setAttribute("src", staticSrc);
    // productSwiper2.autoplay.start(); // swiper 자동 재생 다시 시작
  });
});
