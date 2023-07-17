$('.autoplay').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    // prevArrow: false,
    // nextArrow: false,
    responsive: [

        {
            breakpoint: 9500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.slick-right-btn').on('click', function () {
    $('.autoplay').find('.slick-next').click()
})
$('.slick-left-btn').on('click', function () {
    $('.autoplay').find('.slick-prev').click()
})
$('.slickautoplay .slick-dots button').html('<i class="bi bi-dot"></i>')