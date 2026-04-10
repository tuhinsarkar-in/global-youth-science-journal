;(function () {

    'use strict';

    var owlCarousel = function(){

        $('#slider1').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

        $('#slider2').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('#slider3').owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

    };


    var videos = function() {


        $(document).ready(function () {
            $('#play-video').on('click', function (ev) {
                $(".fh5co_hide").fadeOut();
                $("#video")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });


        $(document).ready(function () {
            $('#play-video_2').on('click', function (ev) {
                $(".fh5co_hide_2").fadeOut();
                $("#video_2")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });

        $(document).ready(function () {
            $('#play-video_3').on('click', function (ev) {
                $(".fh5co_hide_3").fadeOut();
                $("#video_3")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });


        $(document).ready(function () {
            $('#play-video_4').on('click', function (ev) {
                $(".fh5co_hide_4").fadeOut();
                $("#video_4")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });
    };

    var googleTranslateFormStyling = function() {
        $(window).on('load', function () {
            $('.goog-te-combo').addClass('form-control');
        });
    };


    var contentWayPoint = function() {
        var i = 0;

        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '85%' } );
        // }, { offset: '90%'} );
    };


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'swing');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

    var setActiveNavbarLink = function() {
        var pageKeyFromPathname = function(pathname) {
            if (!pathname) return 'index.html';
            var cleaned = String(pathname);
            // Remove any trailing slash (except when pathname is just "/")
            if (cleaned.length > 1 && cleaned.endsWith('/')) cleaned = cleaned.slice(0, -1);
            var parts = cleaned.split('/').filter(function(p){ return p; });
            var last = parts.length ? parts[parts.length - 1] : '';
            if (!last) return 'index.html';
            // Treat "/" and "/index.html" as the same page key
            if (last.toLowerCase() === 'index.html') return 'index.html';
            return last;
        };

        var currentKey;
        try {
            currentKey = pageKeyFromPathname(window.location.pathname);
        } catch (e) {
            currentKey = 'index.html';
        }

        // Clear any hardcoded active states first
        $('.navbar-nav .nav-item').removeClass('active');
        $('.navbar-nav .nav-link').removeClass('active');
        $('.navbar-nav .dropdown-item').removeClass('active');

        var matched = false;
        $('.navbar-nav a').each(function(){
            if (matched) return;
            var $link = $(this);
            var href = $link.attr('href');
            if (!href || href === '#' || href.toLowerCase().startsWith('javascript:')) return;

            var linkKey;
            try {
                var url = new URL(href, window.location.href);
                linkKey = pageKeyFromPathname(url.pathname);
            } catch (e) {
                return;
            }

            // Normalize home links
            if (linkKey === '' || linkKey === '/') linkKey = 'index.html';

            if (String(linkKey).toLowerCase() === String(currentKey).toLowerCase()) {
                matched = true;
                $link.addClass('active');
                if ($link.hasClass('dropdown-item')) {
                    var $dropdown = $link.closest('.nav-item.dropdown');
                    $dropdown.addClass('active');
                    $dropdown.find('> a.nav-link').addClass('active');
                } else {
                    $link.closest('.nav-item').addClass('active');
                }
            }
        });
    };

	
	$(function(){
		owlCarousel();
		videos();
        contentWayPoint();
		goToTop();
		googleTranslateFormStyling();
        setActiveNavbarLink();
	});

}());
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}