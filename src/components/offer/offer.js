import $ from 'jquery';

$('.offer__list').slick({
	dots: true,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 3000
});


$('.offer__img').on('click', function() {
	let modal = $('.modal__img');

	if($(modal).hasClass('modal') !== true && $(window).width() > 576){

		let attr = $(this).attr('src');

		$(modal).addClass('modal');
		$(modal).fadeIn().html('<img>');
		$('.modal__img img').attr('src', attr)
	}

	$(modal).on('click', function(){
		$(this).fadeOut().removeClass('modal');
		$('.modal__img img').remove()
	})


})