import * as myFunctions from "./modules/functions.js";
myFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const workSlider = new Swiper(".work__slider", {
    slideClass: "work__slide",
    pagination: {
        el: ".work__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "work__bullet",
        bulletActiveClass: "work__bullet--active",
    },
});

const reviewsSlider = new Swiper(".reviews__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slideClass: "reviews__slide",
    pagination: {
        el: ".reviews__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "reviews__bullet",
        bulletActiveClass: "reviews__bullet--active",
    },
});

const reviewsSlides = document.querySelectorAll(".reviews__slide");
if (reviewsSlides.length !== 0) {
    reviewsSlides.forEach((slide) => {
        slide.style.minWidth = slide.style.width;
        if (window.innerWidth < 767) {
            console.log("make the slider :)");
        }
    });
}

const mediaSlider = new Swiper(".media__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slideClass: "media__slide",
    pagination: {
        el: ".media__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "media__bullet",
        bulletActiveClass: "media__bullet--active",
    },
});

const mediaSlides = document.querySelectorAll(".media__slide");
if (mediaSlides.length !== 0) {
    mediaSlides.forEach((slide) => {
        slide.style.minWidth = slide.style.width;
    });
}
