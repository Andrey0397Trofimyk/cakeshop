const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .extract(["jquery", "swiper"])
    .sass("resources/sass/app.scss", "public/css")
    .options({
        processCssUrls: false
    })
    .browserSync({
        proxy: process.env.APP_URL,
        host: process.env.APP_HOST,
        port: 3000,
        open: "external"
    });
