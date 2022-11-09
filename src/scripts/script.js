//=require ./helpers/*.js

$(function () {
  initCarousel();
  initMobileMenu();
  initModalButtons();
});

function initCarousel() {
  $(".advantages__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
  });

  $(".reviews__wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          arrows: true,
          dots: true,
        },
      },
    ],
  });

  $(window).on("resize", function () {
    $(".advantages__list").slick("resize");
    $(".reviews__wrapper").slick("resize");
  });
}

function initMobileMenu() {
  const mobileMenuOpenBtn = document.querySelector(".main-nav__toggle");
  mobileMenuOpenBtn.addEventListener("click", () => {
    mobileMenuOpenBtn.classList.toggle("main-nav__toggle--opened");
    const mobileMenuText = document.querySelector(".main-nav__text-mobile");
    const mobileMenu = document.querySelector(".main-nav__wrapper");
    mobileMenuText.classList.toggle("hidden");
    mobileMenu.classList.toggle("shown");
  });
}

function initModalButtons() {
  debugger;
  const openButton = document.querySelector(".js-login");
  const modal = document.querySelector(".sign-in-modal");
  const closeButton = document.querySelector(".js-close-modal");
  const body = document.querySelector(".page__body");
  openButton.addEventListener("click", showModalAndOverlay);
  closeButton.addEventListener("click", hideModalAndOverlay);
  document.addEventListener("click", ({ target }) => {
    if (modal.classList.contains("shown")) {
      if (target.classList.contains("show-overlay")) {
        hideModalAndOverlay();
      }
    }
  });
  function showModalAndOverlay() {
    modal.classList.add("shown");
    body.classList.add("show-overlay");
  }

  function hideModalAndOverlay() {
    modal.classList.remove("shown");
    body.classList.remove("show-overlay");
  }
}
