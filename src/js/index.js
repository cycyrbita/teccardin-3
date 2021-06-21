
$(document).ready(function () {
    $('.js-message__box').owlCarousel({
        loop: true,
        autoHeight: true,
        nav: true,
        responsive: {
            0 : {
                stagePadding: 5,
                items: 1,
                margin: 15
            },

            768 : {
                items: 2,
                stagePadding: 5,
                margin: 15
            },

            1024 : {
                items: 3,
                stagePadding: 5,
                margin: 15
            }
        }
    });
});