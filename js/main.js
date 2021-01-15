$(window).on('load', function() {
    // ########### Pre-loader ########## //
    $('.preloader').fadeOut('slow');
});

$(document).ready(function() {
    //########## Navbar shrink ##########//
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 90) {
            $('.navbar').addClass('navbar-shrink');
        }
        else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });

    //########## Video Popup ##########//
    const videoSrc = $('#player-1').attr('src');
    $('.video-play-btn, .video-popup').on('click', function() {
        if($('.video-popup').hasClass('open')) {
            $('.video-popup').removeClass('open');
            $('#player-1').attr('src', '');
        }
        else {
            $('.video-popup').addClass('open');
            if($('#player-1').attr('src')=='') {
                $('#player-1').attr('src', videoSrc);
            }
        }
    });

    //########## Feature Carousel  ##########//
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    //########## Screenshot Carousel  ##########//
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    });

    //########## Testimonial Carousel  ##########//
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    //########## Team Carousel  ##########//
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    //########### Page Scrolling- ScrollIt ############//
    $.scrollIt({
        topOffset: -50
    });
    
    //########### Navbar collapse ###########//
    $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide')
    });


    //########## Theme- Dark/Light ##########//
    function toggleTheme() {
        if(localStorage.getItem('level-up-theme') !== null) {
            if(localStorage.getItem('level-up-theme') === "dark") {
                $('body').addClass('dark');
            }
            else {
                $('body').removeClass('dark');
            }
        }
        updateIcon();
    }
    toggleTheme();

    $('.theme').on('click', function() {
        $('body').toggleClass('dark');
        if($('body').hasClass('dark')) {
            localStorage.setItem('level-up-theme', 'dark');
        }
        else {
            localStorage.setItem('level-up-theme', 'light');
        }
        updateIcon();
    })

    function updateIcon() {
        if($('body').hasClass('dark')) {
            $('.theme i').removeClass('fa-moon');
            $('.theme i').addClass('fa-sun');
        }
        else {
            $('.theme i').removeClass('fa-sun');
            $('.theme i').addClass('fa-moon');
        }
    }

});