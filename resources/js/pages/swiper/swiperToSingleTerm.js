export const resizeSliderRow = (slider = null) => {
    $(window).resize(function() {
        if ($(window).width() >= 460) {
            slider.find(".swiper-slide").css("margin-top", 0);
        }
    });
};
