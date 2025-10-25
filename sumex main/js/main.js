/*----------------------------
  Smooth Navigation Height active
  ------------------------------ */
const header = document.querySelector("header");

const headroom = new Headroom(header);
headroom.init();

jQuery(document).ready(function ($) {
  "use strict";
  /*----------------------------
  Mobile Menu active
  ------------------------------ */
  $(".navigation").slicknav({
    brand:
      '<a href="index.html" class="mobile-text-logo"><span style="font-family: Rubik, sans-serif; font-size: 24px; font-weight: 700; color: #1616db;">Samson<span style="color: #00d4ff;">.</span>Tedla</span></a>',
  });

  /*----------------------------
  Owl Carousel active
  ------------------------------ */
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    responsiveClass: true,
    margin: 30,
    dots: true,
    navSpeed: 1400,
    smartSpeed: 800,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  /*----------------------------
  Portfolio gallery active
  ------------------------------ */
  $(".portfolio-area").lingGalleryFilter({
    tagContainer: $(".portfolio-menu"),
  });

  $(".portfolio-menu button").on("click", function () {
    $(".portfolio-menu button").removeClass("active-work");
    $(this).addClass("active-work");
  });

  /*----------------------------
  Portfolio Image Zoom  active
  ------------------------------ */
  $(".venobox").venobox({
    infinigall: true,
    numeratio: true,
  });

  /*----------------------------
  Masonary active
  ------------------------------ */
  $(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1,
      horizontalOrder: true,
    },
  });

  /*----------------------------
  Popup Video active
  ------------------------------ */
  $(".click-video").magnificPopup({ type: "iframe" });

  /*----------------------------
  Scroll to Top active
------------------------------ */
  $("body").materialScrollTop();
});
