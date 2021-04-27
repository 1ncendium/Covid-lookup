$(document).ready(function(){
	AOS.init();
	$('[data-bs-hover-animate]')
		.mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
		.mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });

	$('[data-bs-chart]').each(function(index, elem) {
		this.chart = new Chart($(elem), $(elem).data('bs-chart'));
	});

});