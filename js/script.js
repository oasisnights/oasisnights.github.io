$(function() {
	$.fn.parallax = function(st, r) {
		$(this).css('backgroundPositionY', (parseInt($(this).css('backgroundPositionY'), 10) - st) * r);
	}

	$(window).scroll(function(event) {
		var wh = $(this).height();
		var st = $(document).scrollTop();
		var $body = $('body');
		var $shapes = $('[shapes]');
		var $logo = $('[logo]');
		$body.parallax(st, 0.1);
		$shapes.parallax(st, 0.4);
		$logo.parallax(st, 0.07);
	});
});
