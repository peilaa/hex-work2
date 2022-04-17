$(document).ready(function() {
    //top//
    $('.top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    //swiper輪播效果//
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    //lightbox燈箱效果//
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true
    });
});