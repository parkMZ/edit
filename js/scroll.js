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

// 메인 인트로 배너, 챗봇 아이콘 순차 등장
const tl = gsap.timeline({});

ScrollTrigger.create({
  trigger: ".intro-slide",
  start: "top 85%",
  endTrigger: "footer",
  animation: tl,
});

tl.to(".intro-slide", {
  onStart: () => document.querySelector(".intro-slide").classList.add("active"),
}).to(".chatbot-box", {
  onStart: () => document.querySelector(".chatbot-box").classList.add("active"),
  delay: 0.25,
});

ScrollTrigger.create({
  trigger: lineUp,
  start: "top 85%",
  endTrigger: footer,
  toggleClass: "active",
});

ScrollTrigger.create({
  trigger: lineUpTitle,
  start: "top 85%",
  endTrigger: footer,
  toggleClass: "active",
});

ScrollTrigger.create({
  trigger: subscribe,
  start: "top 85%",
  endTrigger: footer,
  toggleClass: "active",
});

ScrollTrigger.create({
  trigger: news,
  start: "top 90%",
  endTrigger: footer,
  toggleClass: "active",
});
