const tabBtns = document.querySelectorAll(".product-wrap .tab-menu li");
const tabItems = document.querySelectorAll(".product-wrap .tab-items li");

tabBtns.forEach((btn, index) =>
  btn.addEventListener("click", (e) => {
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    const target = e.currentTarget;
    target.classList.add("active");
    tabItems.forEach((item) => item.classList.remove("active"));
    tabItems[index].classList.add("active");
  })
);
