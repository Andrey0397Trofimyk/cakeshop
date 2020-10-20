export const seeWidthWindowForModal = (obj = null) => {
    $(window).width() >= 992
        ? obj.css("display", "none")
        : obj.css("display", "flex");
};
