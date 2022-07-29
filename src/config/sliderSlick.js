const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
};

const settingsThumbs = {
  arrows: false,
  dots: false,
  swipeToSlide: true,
  focusOnSelect: true,
  centerPadding: "10px",
  slidesToScroll: 3,
  slidesToShow: 3,
  draggable: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToScroll: 3,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToScroll: 3,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ],
};

const settingFeedback = {
  // slidesToScroll: 1,
  // asNavFor: ".slider-for",
  arrows: false,
  dots: false,
  centerMode: true,
  swipeToSlide: true,
  focusOnSelect: true,
  centerPadding: "10px",
  slidesToScroll: 1,
  slidesToShow: 1,
  draggable: true,
};

export { settings, settingsThumbs, settingFeedback };
