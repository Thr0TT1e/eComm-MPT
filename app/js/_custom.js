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
});
