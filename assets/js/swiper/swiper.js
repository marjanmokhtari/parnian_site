var swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      allowSliderPrev:true
    },
    breakpoints:{
        300:{
            slidesPerView:1,
            spaceBetween: 10

        },
        1024:{
            slidesPerView:3,
            spaceBetween: 30
        }
    }
  });