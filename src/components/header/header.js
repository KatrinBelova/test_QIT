import $ from 'jquery';

//Show form message
$('.form__message').css('opacity','0'); 
$('.form__button').on('click', function() {
	$('.form__message').css('opacity','1');
	setTimeout(function() {$('.form__message').css('opacity','0')}, 2000);
});

$('.header__form').submit(function(){
	
	let formData = {
		'name' : $('input[name=name]').val(),
		'number' : $('input[name=number]').val()
	};

	$.ajax({
		url: '../app.php',
		type: 'POST',
		data: formData,
		dataType: 'json',
		encode: true
	})

	.done(function(data) {
		if(data.success === true) {
			$('.form__message').show();
		}
		else{
			alert('Попробуйте еще раз!');
		}
	});
	event.preventDefault();
});


