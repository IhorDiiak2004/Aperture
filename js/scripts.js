$('.owl-carousel').owlCarousel({
  autoplay: true,
  autoplayTimeout: 1500,
  autoplaySpeed: 1000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1100: {
      items: 5
    }
  }
});
