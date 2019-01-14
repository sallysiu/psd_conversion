$(function () {
	// Document is ready! All your code goes inside.
	$('a').smoothScroll({
		easing: 'swing',
		speed: 520,
		autoFocus: true
	});


	// when a user clicks on an anchor tag inside of the ul with the class of nav do this:
	$('ul.nav a').on('click', function () {
		// change the input type checkbox's checked attribute to be false(as if a user unchecked it)
		$('input[type="checkbox"]').attr('checked', false);
	});



});
