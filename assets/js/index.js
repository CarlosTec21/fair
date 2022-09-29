"use strict";
$(document).ready(function () {
    var s = "https://egade.tec.mx/sites/default/files/fair/";
    $("#main-header").load(s + "menu.html"), $("#header").load(s + "menu.html"), $("#footer").load(s + "footer.html"), $(".tabs_partnerships").tabs(), $(".item_tabs").tabs()
}), $(".slider_socios").slick({
    arrows: !1,
    dots: !1,
    infinite: !0,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: !0
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }]
}), $(".home-slider").slick({
    arrows: !1,
    autoplay: !0,
    dots: !1,
    infinite: !0,
    speed: 500,
    fade: !0,
    cssEase: "linear"
});