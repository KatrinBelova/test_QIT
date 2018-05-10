import $ from 'jquery';

$(document).ready(function() {

	//Clickble NAV
	$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	let position = $($(this).attr('href')).offset().top-60;

	$('html, body').animate({

		scrollTop: position
		}, 1500);
	});
	
	//Hamburger menu
	$('.menu__hamburger').on('click', function(){

		$(this).fadeOut();
		$('.menu').animate({right: '0'}).addClass('responsive_menu')
	});

	$('.menu__exit').on('click', function(){

		$('.menu__hamburger').fadeIn();
		$('.menu').animate({right: '-100%'}).removeClass('responsive_menu')
	});

	$('.menu__item a').on('click', function() {

		if($('.menu').hasClass('.responsive_menu')){
			$('.menu__hamburger').fadeIn();
			$('.menu').animate({right: '-100%'}).removeClass('responsive_menu')
		}
	});
});

let controlPoint = $('.menu');
let pointPosition = controlPoint.offset().top;

$(window).scroll(function(){
		//Animate Nav after Scroll


	if($(document).scrollTop() > pointPosition && $(window).width() >= 575) {
		$('.menu').addClass('menu_top');
	} else {
		$('.menu').removeClass('menu_top');
	};

	if($(document).scrollTop() > pointPosition && $(window).width() >= 575) {
		$('.menu').addClass('menu_fixed');
	} else {
		$('.menu').removeClass('menu_fixed');
	}

});