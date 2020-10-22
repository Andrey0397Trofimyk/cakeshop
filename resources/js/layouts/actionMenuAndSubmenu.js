import { seeWidthWindowForModal } from "../libs/seeWidthWindowForModal";

$(document).on("click", ".js--trigger-burger", function(event) {
    event.preventDefault();

    const headerWrapper = $(".header__wrapper"),
        headerBurger = $(".header__burger"),
        headerDropdown = $(".header__dropdown"),
        languageList = $(".languages");

    headerDropdown.css({
        "margin-top": $(".header").innerHeight(),
        height: `calc(100vh - ${$(".header").innerHeight()}px)`
    });

    headerWrapper
        .find(".active")
        .removeClass("active")
        .siblings()
        .fadeOut();

    languageList.find(".languages__wrapper").css("margin", 0);

    !$(this).hasClass("active-burger")
        ? $("body").css("overflow", "hidden")
        : $("body").css("overflow", "auto");

    headerBurger.toggleClass("active-burger");

    headerDropdown.fadeToggle(250);
});

$(document).on("click", ".js--trigger-link-navbar", function(event) {
    event.preventDefault();

    const headerLink = $(".navbar__link");

    if ($(this).hasClass("active-navbar-link")) {
        $(this)
            .toggleClass("active-navbar-link")
            .siblings()
            .slideToggle();
        return false;
    }
    headerLink
        .not($(this))
        .removeClass("active-navbar-link")
        .siblings()
        .slideUp();

    $(this)
        .addClass("active-navbar-link")
        .siblings()
        .slideDown();
});

$(document).on("click", ".js--trigger-link-submenu", function(event) {
    event.preventDefault();

    const headerList = $(".navbar__list");

    headerList.find(".submenu__link").removeClass("active-submenu-link");

    $(this).addClass("active-submenu-link");
});

$(document).on("click", ".js--change-language", function(event) {
    event.preventDefault();

    const headerLanguage = $(".header__languages"),
        buttonLanguage = $(".navbar-info__language");

    headerLanguage.find(".active").removeClass("active");

    $(this).addClass("active");

    buttonLanguage.text($(this).text());
});

$(document).on("click", ".js--show-language", function(event) {
    $(".header__wrapper").css("z-index", 1);

    const language = $(".languages"),
        formLanguage = $(".header__check-opt");

    formLanguage.css("display", "block");

    language
        .find(".languages__wrapper")
        .css({
            "margin-left": $(".navbar-info__language").offset().left - 10,
            "margin-top": "40px"
        })
        .parent()
        .fadeToggle(250);
});

$(document).on("click", ".js--dropdown-language", function(event) {
    if ($(event.target).attr("class") == $(this).attr("class")) {
        const formLanguage = $(".header__check-opt");

        formLanguage.css("display", "none");

        $(this)
            .fadeOut(250)
            .siblings()
            .removeClass("active");
    }
});

$(window).on("resize", function() {
    seeWidthWindowForModal($(".languages"));

    if ($(window).width() < 992) {
        $(".header__check-opt").css("display", "flex");
    } else if ($(window).width() >= 992) {
        $(".header__check-opt").css("display", "none");
    }
});
