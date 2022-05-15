(function ($) {
	"use strict";
	
	jQuery(document).ready(function($){
		// navbar-fixed-activation
		$(window).on('scroll', function(){
			var menuHeight = $("html").scrollTop();
			var menuFixed = $(".header-area").outerHeight();
			if (menuHeight > menuFixed) {
				$(".navbar").css({
					"position" : "fixed",
					"top" : "0",
					"left" : "0",
					"width" : "100%",
					"background" : "rgba(66,66,66,.8)",
					"padding" : "5px 0",
					"zIndex" : "9998"
				});
			}
			else {
				$(".navbar").removeAttr("style");
			}
		});
		// smooth-scroll-activation
		var smoothScrollHeight = $(".header-area").outerHeight();
		$(".navbar ul li a").on('click', function(e){
			var linkHref = $(this).attr("href");
			$("html, body").animate({
				"scrollTop" : $(linkHref).offset().top - smoothScrollHeight
			},1000);
			e.preventDefault();
		});
		// scroll-spy-activation
		$("body").scrollspy({
			target : ".navbar-collapse",
			offset: 65
		});
		// ityped-activation
		window.ityped.init(document.querySelector('.ityped'),{
			strings: ['ux ui designer.', 'front end developer.'],
			loop: true,
		});
		// progress-bar-activation
		$(".photoshop").animate({width: "70%"},2000);
		$(".html5").animate({width: "95%"},2000);
		$(".css3").animate({width: "85%"},2000);
		$(".javascript").animate({width: "60%"},2000);
		$(".wordpress").animate({width: "75%"},2000);
		// portfolio-tab-activation
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
			columnWidth: 1
			}
		});
		$('.portfolio-tab li').on( 'click', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		$('.portfolio-tab li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
		// image-popup-activation
		$('.hover-state a').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true
			}
		});
		// reviews-slider-activation
		$('.owl-carousel').owlCarousel({
            loop: true,
			margin:30,
            items: 3,
            autoplay: true,
			autoplayTimeout:3000,
            nav:true,
			navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			dots:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }  
        });
		// go-top-button-activation
		$(window).on('scroll', function(){
			var goTopButtonVisible = $("html").scrollTop();
			if (goTopButtonVisible > 500){
				$(".go-top-button").fadeIn();
			}
			else {
				$(".go-top-button").fadeOut();
			}
		});
		$(".go-top-button").on('click', function(){
			$("html").animate({
				"scrollTop" : "0"
			},1500);
		});
	});
	
	jQuery(window).on('load', function(){
		// site-preloader-activation
		$(".winter-preloader").fadeOut(500);
	});
	
})(jQuery);