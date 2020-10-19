import { setOverflowBodyScroll } from "../base/setOverflowBodyScroll";

$(document).on("click", ".js--trigger-icon", function(event) {
    event.preventDefault();

    const onlineShop = $(".tell__online-shop"),
        headerBurger = $(".header__burger"),
        headerWrapper = $(".header__wrapper"),
        mainList = $(".main__list");

    if ($(window).width() > 992) {
        onlineShop.css({
            "margin-left": $(".tell__button").offset().left - 160,
            "margin-top": "120px"
        });
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
    }

    headerWrapper
        .css("z-index", 3)
        .find(".active")
        .not($(this))
        .removeClass("active")
        .siblings()
        .fadeOut(250);

    mainList
        .find(".main__form")
        .fadeOut(0)
        .siblings()
        .removeClass("active");

    $(this)
        .toggleClass("active")
        .siblings()
        .fadeToggle(250);

    $(this).hasClass("active")
        ? setOverflowBodyScroll(true)
        : setOverflowBodyScroll();
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
