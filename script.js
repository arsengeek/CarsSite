
$('.nav').on('click', function() {
    if ($(this).hasClass('active') && $(this).hasClass('open')) {
        $('main').toggleClass('main-close');
        $(this).toggleClass('active open');
        $('.li2').toggleClass('active');
    } else {
        $(this).toggleClass('active open');
        $('main').toggleClass('main-close');
        $('.li2').toggleClass('active')
    }
});


$('.main').on('click', function() {
    if ($('.nav').hasClass('active') && $('.nav').hasClass('open')) {
        $('.nav').toggleClass('active open');
        $('main').toggleClass('main-close');
    } else {
    }
});

