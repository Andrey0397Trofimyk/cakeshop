export const setOverflowBodyScroll = (scroll = false) => {
    $(window).scrollTop(0);
    if (scroll) {
        window.onscroll = function() {
            window.scrollTo(0, 0);
        };
        $("body").css({
            // overflow: "hidden"
            // margin: `0 ${mr}px 0 0`
        });
    } else {
        window.onscroll = function() {};
        $("body").css({
            // overflow: "auto"
            // margin: `0 0 0 0`
        });
    }
};
