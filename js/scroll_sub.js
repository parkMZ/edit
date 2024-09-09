const header = document.querySelector("header");
const lineUp = document.querySelector(".line-up");
const lineUpTitle = document.querySelector(".line-up .inner");
const subscribe = document.querySelector(".subscribe .bg");
const news = document.querySelector(".news");
const breadcrumb = document.querySelector("section.breadcrumb");
const stickyBreadcrumb = document.querySelector("header .breadcrumb");
const subProductList = document.querySelector(".sub-wrap .items");
const footer = document.querySelector(".footer");

ScrollTrigger.create({
  trigger: header,
  start: "top top",
  endTrigger: footer,
  onUpdate: ({ direction }) => {
    if (direction === 1) {
      header.classList.add("active");
    } else if (direction === -1) {
      header.classList.remove("active");
    }
  },
});

// 좌우 아이템 순차 등장
// const items = document.querySelector(".tab-items li.tera-harz .introduce");
// const tl = gsap.timeline({});

// ScrollTrigger.create({
//   trigger: ".intro-slide",
//   start: "top 85%",
//   endTrigger: "footer",
//   animation: tl,
// });

// tl.to(".intro-slide", {
//   onStart: () => document.querySelector(".intro-slide").classList.add("active"),
// }).to(".chatbot-box", {
//   onStart: () => document.querySelector(".chatbot-box").classList.add("active"),
//   delay: 0.25,
// });

ScrollTrigger.create({
  trigger: breadcrumb,
  start: "top top",
  endTrigger: footer,
  onUpdate: ({ direction }) => {
    if (direction === 1) {
      gsap.to(stickyBreadcrumb, {
        position: "fixed",
        opacity: 1,
        y: 37,
        duration: 0.1,
      });
    } else if (direction === -1) {
      gsap.to(stickyBreadcrumb, {
        opacity: 0,
        y: -60,
        duration: 0.1,
      });
    }
  },
});

// 제품소개
ScrollTrigger.create({
  trigger: subProductList,
  start: "top 50%",
  toggleClass: "active",
});

const contents = gsap.utils.toArray(".sub-wrap .content .default-ani > *");

contents.forEach((content) => {
  ScrollTrigger.create({
    trigger: content.parentNode,
    start: "top 90%",
    endTrigger: footer,
    toggleClass: "active",
  });
});
