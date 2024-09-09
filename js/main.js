const wrap = document.querySelector(".wrap");
const btnOpenMenu = document.querySelector(".btn-menu");
const btnCloseMenu = document.querySelector(".btn-close-menu");
const menu = document.querySelectorAll(".header .gnb-menu .depth2");

/* 햄버거 메뉴 이벤트 */
btnOpenMenu.addEventListener("click", () => {
  wrap.classList.add("open");
  document.body.style.overflow = "hidden";
});

btnCloseMenu.addEventListener("click", () => {
  wrap.classList.remove("open");
  document.body.style.overflow = "auto";
});

/* 제품소개 페이지와 header 내부 breadcrumb */
const currentDepths = document.querySelectorAll(
  "section.breadcrumb .sub-depth:not(.sub-depth1) .current"
);
const depth2Options = document.querySelectorAll(
  "section.breadcrumb .sub-depth2 li"
);
const depth3Options = document.querySelectorAll(
  "section.breadcrumb .sub-depth3 li"
);
const stickyCurrentDepths = document.querySelectorAll(
  "header .breadcrumb .sub-depth:not(.sub-depth1) .current"
);
const stickyDepth2Options = document.querySelectorAll(
  "header .breadcrumb .sub-depth2 li"
);
const stickyDepth3Options = document.querySelectorAll(
  "header .breadcrumb .sub-depth3 li"
);

// 클릭한 옵션의 텍스트를 current의 text로 변경 + 연동된 다른 breadcrumb도 업데이트
const handleSelect = (currentDepth, item, stickyCurrentDepth) => {
  currentDepth.parentNode.classList.remove("active");
  currentDepth.innerHTML = item.textContent;

  if (stickyCurrentDepth) {
    stickyCurrentDepth.parentNode.classList.remove("active");
    stickyCurrentDepth.innerHTML = item.textContent;
  }
};

// 라벨을 클릭시 옵션 목록이 열림/닫힘
const toggleDropdown = (currentDepth) => {
  currentDepth.parentNode.classList.toggle("active");
};

// 옵션 클릭시 클릭한 옵션을 넘김 (section과 header 둘 다 적용)
depth2Options.forEach((option, index) => {
  option.addEventListener("click", () =>
    handleSelect(currentDepths[0], option, stickyCurrentDepths[0])
  );
});

depth3Options.forEach((option) => {
  option.addEventListener("click", () =>
    handleSelect(currentDepths[1], option, stickyCurrentDepths[1])
  );
});

stickyDepth2Options.forEach((option) => {
  option.addEventListener("click", () =>
    handleSelect(stickyCurrentDepths[0], option, currentDepths[0])
  );
});

stickyDepth3Options.forEach((option) => {
  option.addEventListener("click", () =>
    handleSelect(stickyCurrentDepths[1], option, currentDepths[1])
  );
});

// currentDepth 클릭시 드롭다운 열림/닫힘 (section과 header 둘 다 적용)
currentDepths.forEach((currentDepth) => {
  currentDepth.addEventListener("click", () => toggleDropdown(currentDepth));
});

stickyCurrentDepths.forEach((stickyCurrentDepth) => {
  stickyCurrentDepth.addEventListener("click", () =>
    toggleDropdown(stickyCurrentDepth)
  );
});
