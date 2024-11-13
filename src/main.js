import "./assets/scss/main.scss";

function initSwiper() {
  if (window.innerWidth >= 768) {
    const swiper = new Swiper(".features__swiper", {
      slidesPerView: "auto",
      spaceBetween: 32,
    });
  }
}

window.addEventListener("load", initSwiper);

window.addEventListener("resize", initSwiper);

function closeMenu() {
  const burger = document.querySelector(".burger");
  const headerMenu = document.querySelector(".header__menu");
  const body = document.body;
  const menuOverlay = document.querySelector(".menu-overlay");
  const dropendMobile = document.querySelector(".dropend-mobile");
  const dropendMobileSvg = document.querySelector(".dropend-mobile-svg");

  burger.classList.remove("active");
  headerMenu.classList.remove("active");
  body.style.overflowY = "auto";
  menuOverlay.classList.remove("visible");
  dropendMobile.classList.remove("open");
  dropendMobileSvg.classList.remove("rotate-180");
}

document.querySelector(".burger").addEventListener("click", function () {
  const burger = this;
  const headerMenu = document.querySelector(".header__menu");
  const body = document.body;
  const menuOverlay = document.querySelector(".menu-overlay");

  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");

  if (burger.classList.contains("active")) {
    body.style.overflowY = "hidden";
    menuOverlay.classList.add("visible");
  } else {
    body.style.overflowY = "auto";
    menuOverlay.classList.remove("visible");
  }
});

document.querySelector(".menu-overlay").addEventListener("click", function (e) {
  const headerMenu = document.querySelector(".header__menu");
  if (!e.target.closest(".header__menu")) {
    closeMenu();
  }
});

document
  .querySelector(".menu__link-close__img")
  .addEventListener("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

document.addEventListener("DOMContentLoaded", function () {
  const dropdownIcons = document.querySelectorAll(".menu__icon-wrap");

  dropdownIcons.forEach((icon) => {
    icon.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdown =
        this.closest(".menu__item").querySelector(".menu__dropdown");
      dropdown.classList.toggle("menu__dropdown--open");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".property-list__button");
  const items = document.querySelectorAll(".property-list__items");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");

      buttons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      items.forEach((item) => (item.style.display = "none"));

      document.getElementById(targetId).style.display = "grid";
    });
  });

  document.getElementById("Rent").style.display = "grid";
});
