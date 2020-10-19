import { resizeSliderColumn } from "./swiperToLongTerm";
import { resizeSliderRow } from "./swiperToSingleTerm";

const ourNews = new Swiper.default(".our-news__slider-first", {
    direction: "horizontal",
    slidesPerView: 1.4,
    spaceBetween: 15,
    slidesPerColumn: 1,
    watchOverflow: "true",
    slidesPerColumnFill: "row",
    navigation: {
        nextEl: ".our-news__arrow--next",
        prevEl: ".our-news__arrow--prev"
    },
    breakpoints: {
        460: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4, slidesPerColumn: 2 },
        1560: { slidesPerView: 5, slidesPerColumn: 2 }
    }
});
resizeSliderColumn($(".our-news__slider-first"), 5);
// const ourNewsSecond = new Swiper.default(".our-news__slider-second", {
//     direction: "horizontal",
//     slidesPerView: 1.4,
//     spaceBetween: 15,
// watchOverflow: "true",
//     breakpoints: {
//         460: { slidesPerView: 2 },
//         768: { slidesPerView: 3 },
//         992: { slidesPerView: 4 },
//         1560: { slidesPerView: 5 }
//     }
// });
// ourNews.controller.control = ourNewsSecond;
// ourNewsSecond.controller.control = ourNews;

// popular-category

const popularCategoryFisrt = new Swiper.default(
    ".popular-category__slider-first",
    {
        direction: "horizontal",
        slidesPerView: 1.4,
        slidesPerColumn: 2,
        spaceBetween: 15,
        watchOverflow: "true",
        slidesPerColumnFill: "row",
        navigation: {
            nextEl: ".popular-category__arrow--next",
            prevEl: ".popular-category__arrow--prev"
        },
        breakpoints: {
            460: { slidesPerView: 2, slidesPerColumn: 1 },
            768: { slidesPerView: 3, slidesPerColumn: 1 },
            992: { slidesPerView: 4, slidesPerColumn: 1 },
            1560: { slidesPerView: 5, slidesPerColumn: 1 }
        }
    }
);
resizeSliderRow($(".popular-category__slider-first"));

// resizeSlider($(".popular-category__slider-first"));
// resizeSlider($(".popular-category__slider-first"));
// const popularCategorySecond = new Swiper.default(
//     ".popular-category__slider-second",
//     {
//         direction: "horizontal",
//         slidesPerView: 1.4,
//         spaceBetween: 15,
//         watchOverflow: "true",
//         breakpoints: {
//             460: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             992: { slidesPerView: 4 },
//             1560: { slidesPerView: 5 }
//         }
//     }
// );
// popularCategoryFisrt.controller.control = popularCategorySecond;
// popularCategorySecond.controller.control = popularCategoryFisrt;

// popular-product

const popularProduct = new Swiper.default(".popular-products__slider", {
    direction: "horizontal",
    slidesPerView: 1.4,
    spaceBetween: 15,
    watchOverflow: "true",
    navigation: {
        nextEl: ".popular-products__arrow--prev",
        prevEl: ".popular-products__arrow--next"
    },
    breakpoints: {
        460: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1560: { slidesPerView: 5 }
    }
});
