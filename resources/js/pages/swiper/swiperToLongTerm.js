export const resizeSliderColumn = (slider = null, col = 0) => {
    $(window).resize(function() {
        $(window).width() >= 992
            ? slider.addClass("swiper-container-multirow")
            : slider.removeClass("swiper-container-multirow");

        if ($(window).width() >= 1560) {
            slider
                .find(".swiper-slide")
                .eq(col - 1)
                .css("margin-top", 0);
        } else if ($(window).width() <= 992) {
            slider.find(".swiper-slide").css("margin-top", 0);
        }
    });
};
