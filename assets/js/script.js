

function tablet () {
    return window.matchMedia('(max-width: 1024px)').matches;
}
function mobile () {
    return window.matchMedia('(max-width: 500px)').matches;
}
function windowSize(){
    if ($(window).width() <= '1919'){
        $('#logo').attr("src","./assets/images/logo-small.png");
        $('#footer-logo').attr("src","./assets/images/logo-footer-medium.png");
    } else {
        $('#logo').attr("src","./assets/images/logo.png");
        $('#footer-logo').attr("src","./assets/images/logo.png");
    }
}
$(window).on('load resize',windowSize);

$(document).ready(function(){
    var slider = $('.slider, .advantages-slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    $(".right-block").click(function() {
        $(this).closest('.right-block').find('.play-video').css("display","none");
        $(this).closest('.right-block').find('video').each(function ()
        {
            this.play();
        });
    });
    $('.slick-prev, .slick-next').click(function() {
        $('.play-video').css("display","block");
        $('video').each(function ()
        {
            this.pause();
        });
    });
    $('.sliders').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.main-dropdown').click(function(){
        $('.dropdown-cars').fadeToggle('slow');
    });
    $('.choose').click(function(){
        $('.help-for-search').fadeToggle('slow');
    });
    $('.burger').click(function(){
        $('.header-menu-2').show('slow');
    });
    $('.toggle-dropdown').click(function(){
        $('.cars').fadeToggle('slow');
    });
    $(document).mouseup(function (e) {
        var div = $(".dropdown-cars, .header-menu-2, .cars");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide();
        }
    });
    $(".next-step").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 20;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $(".carousel").waterwheelCarousel({
        autoPlay: 2500
    });
    if (tablet()) {
        $('.cars-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    if (mobile()) {
        $(document).mouseup(function (e) {
            var div = $(".help-for-search");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.hide();
            }
        });
    }
    $('.scroll').jScrollPane();
});

