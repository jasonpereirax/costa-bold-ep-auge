$(document).ready(function() {
    if( localStorage.getItem('modal-newsletter') ) {
        $('.modal-newsletter').hide();
    }
    
    if( localStorage.getItem('footer-privacy-policy') ) {
        $('.footer-privacy-policy').hide();
    }

    $(".btn-close, .btn-subscribe").click(function(e) {
        localStorage.setItem('modal-newsletter', true);

        e.preventDefault();


        $(this).parents('.modal-newsletter').hide();
    });

    $(".btn-accepted").click(function(e) {
        localStorage.setItem('footer-privacy-policy', true);

        $(this).parents('.footer-privacy-policy').hide();
    });

    $(".carousel-01").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 1,
                nav: true
            },
            1000:{
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    $(".carousel-02").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 3,
                nav:false
            },
            1000:{
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

    $(".menu-hamburguer").click(function() {
        $(".menu-mobile").removeClass('hide');
    });
    
    $(".menu-mobile .icon-close").click(function() {
        $(".menu-mobile").addClass('hide');
    });
    
    $(".menu-mobile .wrapper-links .container-link").click(function() {
        $(".menu-mobile").addClass('hide');
    });

    $(".wrapper-read-more").each(function() {
        $(".button-read-more").click(function() {
            $(this).hide();

            $(this).parents(".wrapper-read-more").find('.hidding').show();
        })
    });
});