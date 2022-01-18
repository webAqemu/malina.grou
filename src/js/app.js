import * as myFunctions from "./modules/functions.js";
myFunctions.isWebp();

import Swiper, { Navigation, Pagination } from "swiper";
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

document.addEventListener("DOMContentLoaded", function (event) {
    indexSliders();
    mobileMenu();
});

function indexSliders() {
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

    let reviewsSlides = document.querySelectorAll(".reviews__slide");
    if (window.innerWidth < 767) {
        reviewsSlides.forEach((slide) => {
            slide.insertAdjacentHTML("beforebegin", slide.innerHTML);
            slide.remove();
        });
        reviewsSlides = document.querySelectorAll(".reviews__item");
        reviewsSlides.forEach((slide) => {
            slide.classList.add("reviews__slide");
        });
    }

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
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    if (reviewsSlides.length !== 0) {
        reviewsSlides.forEach((slide) => {
            slide.style.minWidth = slide.style.width;
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
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    const mediaSlides = document.querySelectorAll(".media__slide");
    if (mediaSlides.length !== 0) {
        mediaSlides.forEach((slide) => {
            slide.style.minWidth = slide.style.width;
        });
    }
}

function mobileMenu() {
    const header = document.querySelector(".header");
    const headerMenu = document.querySelector(".header__nav");
    const headerBurger = document.querySelector(".header__burger");
    const layer = document.querySelector(".layer");
    const html = document.querySelector("html");
    header.addEventListener("click", function (e) {
        if (
            e.target.classList.contains("header__burger") ||
            e.target.classList.contains("layer")
        ) {
            headerBurger.classList.toggle("active");
            headerMenu.classList.toggle("active");
            layer.classList.toggle("active");
            html.classList.toggle("active");
        }
    });
}
