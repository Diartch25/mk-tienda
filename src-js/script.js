(function($, window, document) {
	$('#menu-toggle').on('click', function(){
		$('#menu').toggleClass('show');
	});

	$('#sub-menu').on('click', function(){
		$('.menu-expanded').toggleClass('show-sub-menu');
	});

}(window.jQuery, window, document));