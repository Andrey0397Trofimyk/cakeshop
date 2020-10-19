require("./bootstrap");
window.$ = window.jQuery = require("jquery");

window.Swiper = require("swiper/bundle");

$(document).ready(() => {
    require("./layouts/index");
    require("./pages/index");
});
