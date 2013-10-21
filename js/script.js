$(function() {
	$.fn.parallax = function(st, r, offset) {
		var offset = typeof offset !== 'undefined' ? offset : 0;
		$(this).css('backgroundPositionY', (parseInt($(this).css('backgroundPositionY'), 10) - st) * r + offset);
	}

	$(window).scroll(function(event) {
		var wh = $(this).height();
		var st = $(document).scrollTop();
		var $body = $('body');
		var $shapes = $('[shapes]');
		var $logo = $('[logo]');
		$body.parallax(st, 0.3);
		$shapes.parallax(st, -0.5);
		$logo.parallax(st, -0.05, 100);
	});

	var str = 'info' + '\x40' + 'oasisnights' + '\x2e' + 'org';
	$('.info').attr('href', 'mailto:' + str).html(str);
});
