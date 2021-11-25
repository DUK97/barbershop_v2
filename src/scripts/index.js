//=require \..\..\node_modules\jquery\dist\jquery.min.js
//=require \..\..\node_modules\slick-carousel\slick\slick.min.js

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
});
