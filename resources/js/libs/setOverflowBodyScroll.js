export const setOverflowBodyScroll = (scroll = false) => {
    $(window).scrollTop(0);
    console.log(scroll);
    if (scroll) {
        window.onscroll = function() {
            window.scrollTo(0, 0);
        };
    } else {
        window.onscroll = function() {};
    }
};
