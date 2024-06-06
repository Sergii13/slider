import "swiper/css";
import Swiper from "swiper";
import { EffectCoverflow, Navigation } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const mainBlockSlider = document.querySelector(".main-block__slider");
  if (mainBlockSlider) {
    new Swiper(mainBlockSlider, {
      modules: [Navigation, EffectCoverflow],
      spaceBetween: 0,
      slidesPerView: 1,
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 3,
      // effect: "coverflow",
      // coverflowEffect: {
      //   rotate: 0,
      //   stretch: 100,
      //   depth: 0,
      //   modifier: 1,
      //   slideShadows: true,
      // },
      on: {
        init: (swiper) => {
          let currentIndex = swiper.activeIndex;
          setClassForSlides(currentIndex, swiper.slides);
        },
        slideChangeTransitionStart: (swiper) => {
          let currentIndex = swiper.activeIndex;
          setClassForSlides(currentIndex, swiper.slides);
        },
      },
    });
  }

  function setClassForSlides(currentIndex, arr, countNext = 3) {
    for (let i = 1; i <= countNext; i++) {
      arr.forEach((slide) => {
        slide.classList.remove(`visible${i}`);
      });
    }
    const slidesLength = arr.length;
    for (let i = 1; i <= countNext; i++) {
      let newIndex = "";
      if (currentIndex + i <= slidesLength - 1) {
        newIndex = currentIndex + i;
      } else {
        newIndex = currentIndex + i - slidesLength;
      }

      arr[newIndex].classList.add(`visible${i}`);
    }
  }
});
