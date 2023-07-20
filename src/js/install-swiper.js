let swiper = false;
let classArr = [
  {
    swiperClass: "brands__cards",
    pogination: "brands-pagination",
    swiper: null,
  },
  {
    swiperClass: "prices__cards",
    pogination: "prices-pagination",
    swiper: null,
  },
  {
    swiperClass: "tech__cards",
    pogination: "tech-pagination",
    swiper: null,
  },
];

function setSwiper(object) {
  let { swiperClass, pogination, swiper } = object;
  object.swiper = new Swiper("." + swiperClass, {
    spaceBetween: 16,
    slidesPerView: "auto",
    pagination: {
      el: "." + pogination,
      clickable: true,
    },
  });
}
classArr.forEach((item) => setSwiper(item));
// window.addEventListener("resize", () => {
//   classArr.forEach((item) => setSwiper(item));
// });
