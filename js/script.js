$(function() {
	$.fn.parallax = function(st, r, offset) {
		var offset = typeof offset !== 'undefined' ? offset : 0;
		var posY = $(this).css('backgroundPosition').split(' ')[1];
		posY = posY.substring(0, posY.length - 2);
		var newOffset = (posY - st) * r + offset;
		$(this).css('backgroundPosition', "50% " + newOffset + "px");
	}

	$(window).scroll(function(event) {
		var wh = $(this).height();
		var st = $(document).scrollTop();
		var $body = $('body');
		var $shapes = $('#shapes');
		var $logo = $('#logo');
		$body.parallax(st, 0.3);
		$shapes.parallax(st, -0.5, 100);
		$logo.parallax(st, -0.05, 100);
	});

	var str = 'info' + '\x40' + 'oasisnights' + '\x2e' + 'org';
	$('.info').attr('href', 'mailto:' + str).html(str);
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44985899-1', 'oasisnights.org');
ga('send', 'pageview');