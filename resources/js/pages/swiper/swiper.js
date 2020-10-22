import { resizeSliderColumn } from "./swiperToLongTerm";
import { resizeSliderRow } from "./swiperToSingleTerm";

const ourNews = new Swiper.default(".our-news__slider", {
    direction: "horizontal",
    slidesPerView: 1.4,
    spaceBetween: 15,
    slidesPerColumn: 1,
    watchOverflow: "true",
    slidesPerColumnFill: "row",
    slidesOffsetAfter: 80,
    navigation: {
        nextEl: ".our-news__arrow--next",
        prevEl: ".our-news__arrow--prev"
    },
    breakpoints: {
        460: { slidesPerView: 2, slidesPerColumn: 1 },
        768: { slidesPerView: 3, slidesPerColumn: 1 },
        992: { slidesPerView: 4, slidesPerColumn: 2, slidesOffsetAfter: 0 },
        1560: { slidesPerView: 5, slidesPerColumn: 2 }
    }
});
resizeSliderColumn($(".our-news__slider"), 5);

const popularCategoryFisrt = new Swiper.default(".popular-category__slider", {
    direction: "horizontal",
    slidesPerView: 1.4,
    slidesPerColumn: 2,
    spaceBetween: 15,
    watchOverflow: "true",
    slidesPerColumnFill: "row",
    slidesOffsetAfter: 80,
    navigation: {
        nextEl: ".popular-category__arrow--next",
        prevEl: ".popular-category__arrow--prev"
    },
    breakpoints: {
        460: { slidesPerView: 2, slidesPerColumn: 1 },
        768: { slidesPerView: 3, slidesPerColumn: 1 },
        992: { slidesPerView: 4, slidesPerColumn: 1, slidesOffsetAfter: 0 },
        1560: { slidesPerView: 5, slidesPerColumn: 1 }
    }
});
resizeSliderRow($(".popular-category__slider"));

const popularProduct = new Swiper.default(".popular-products__slider", {
    direction: "horizontal",
    slidesPerView: 1.4,
    spaceBetween: 15,
    watchOverflow: "true",
    // slidesOffsetAfter: 80,
    navigation: {
        nextEl: ".popular-products__arrow--prev",
        prevEl: ".popular-products__arrow--next"
    },
    breakpoints: {
        460: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4, slidesOffsetAfter: 0 },
        1560: { slidesPerView: 5 }
    }
});
