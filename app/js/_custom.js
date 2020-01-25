document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
    $(document).ready(function () {
        $('#commercial_slider-inner').slick({
            accessibility: true,
            autoplay: true,
            arrows: false,
            dots: true
        });
    });

    $(document).ready(function () {
        $('.commercial_board-inner').slick({
            accessibility: true,
            autoplay: true,
            arrows: false,
            // dots: true
        });
    });

    $(document).ready(function () {
        $('.multiple_items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            slidesToScroll: 2,
            nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
            prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        });
    });
});
