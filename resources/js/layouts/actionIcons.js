import { setOverflowBodyScroll } from "../libs/setOverflowBodyScroll";

$(document).on("click", ".js--trigger-icon", function(event) {
    event.preventDefault();

    const onlineShop = $(".tell__online-shop"),
        headerBurger = $(".header__burger"),
        headerWrapper = $(".header__wrapper");

    $(this)
        .toggleClass("active")
        .siblings()
        .fadeToggle(250);

    if ($(window).width() > 992) {
        onlineShop.css({
            "margin-left": $(".tell__button").offset().left - 160,
            "margin-top": "70px"
        });

        $(this).hasClass("active")
            ? setOverflowBodyScroll(true)
            : setOverflowBodyScroll();
    } else {
        $(this)
            .siblings()
            .css({
                "margin-top": $(".header").innerHeight(),
                height: `calc(100vh - ${$(".header").innerHeight()}px)`
            });

        onlineShop.css({ margin: "0 auto" });

        headerBurger
            .removeClass("active-burger")
            .parent()
            .siblings()
            .fadeOut();

        $(this).hasClass("active")
            ? $("body").css("overflow", "hidden")
            : $("body").css("overflow", "auto");
    }

    headerWrapper
        .css("z-index", 3)
        .find(".active")
        .not($(this))
        .removeClass("active")
        .siblings()
        .fadeOut(250);
});

$(document).on("click", ".js--dropdown-modal", function(event) {
    event.preventDefault();
    if (
        $(window).width() > 992 &&
        $(event.target).attr("class") == $(this).attr("class")
    ) {
        $(this)
            .fadeOut(250)
            .siblings()
            .removeClass("active");

        setOverflowBodyScroll();
    }
});

$(document).on("click", ".header, .laptop-navbar", function(event) {
    if ($(this).attr("class") !== "laptop-navbar") {
        const mainList = $(".main__list");

        mainList
            .find(".main__form")
            .fadeOut(250)
            .siblings()
            .removeClass("active");
    }
});
