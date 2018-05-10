import $ from 'jquery';

//modal window
$('.modalForm').hide()

$('.button_callForm').on('click', function() {
	let buttonText = $(this).html().split(' ');
	let whatOrder = buttonText.slice(1).join(' ').toString();
	let formButtonText = $('.modalForm__button').html().split(' ');

	formButtonText[1] = whatOrder;
	let newButtonText = formButtonText.join(' ').toString();

	$('.modalForm__button').html(newButtonText);
	$('.modalForm').fadeIn();
});

$('.modalForm__bg').on('click', function() {
	$('.modalForm').fadeOut();
});

$('.modalForm__button').on('click', function() {
	setTimeout(function(){$('.modalForm').fadeOut();}, 8000);
	
});