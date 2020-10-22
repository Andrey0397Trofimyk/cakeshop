import { setOverflowBodyScroll } from "../libs/setOverflowBodyScroll";

$(document).on("click", ".js--trigger-main-link", function(event) {
    event.preventDefault();

    const mainForm = $(".main__form"),
        mainNavbar = $(this)
            .siblings()
            .find(".navbar-submenu"),
        mainList = $(".main__list");

    if ($(window).width() > 992) {
        mainForm.css({
            top: `${$(".laptop-navbar__signboard").offset().top}px`
        });
        mainNavbar.css({
            "margin-left": $(this).offset().left + 10,
            "margin-top": $(this).offset().top - 100
        });
    } else {
        mainNavbar.css({
            margin: "130px auto 0 auto"
        });
    }
    mainList
        .find(".active")
        .not($(this))
        .removeClass("active")
        .siblings()
        .fadeOut(250);

    $(this)
        .toggleClass("active")
        .siblings()
        .fadeToggle(250);

    $(this).hasClass("active")
        ? setOverflowBodyScroll(true)
        : setOverflowBodyScroll();
});

$(document).on("click", ".js--trigger-main-modal", function(event) {
    event.preventDefault();

    if ($(event.target).attr("class") == $(this).attr("class")) {
        $(this)
            .fadeOut(250)
            .siblings()
            .removeClass("active");

        setOverflowBodyScroll();
    }
});
