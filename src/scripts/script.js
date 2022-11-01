//=require ./helpers/*.js
$(function () {
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

  if (window.innerWidth < 450) {
    const mobileMenuOpenBtn = document.querySelector(".main-nav__toggle");
    mobileMenuOpenBtn.addEventListener("click", () => {
      mobileMenuOpenBtn.classList.toggle("main-nav__toggle--opened");
      const mobileMenuText = document.querySelector(".main-nav__text-mobile");
      const mobileMenu = document.querySelector(".main-nav__wrapper");
      mobileMenuText.classList.toggle("hidden");
      mobileMenu.classList.toggle("shown");
    });
  }
});
