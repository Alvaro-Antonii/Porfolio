// Scrolling Effect

$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		  $('.cabeza nav').addClass('bg-black');
	}

	else {
		  $('.cabeza nav').removeClass('bg-black');
	}
})