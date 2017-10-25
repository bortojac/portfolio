$(document).ready(
	function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
		/*this.hash reads the href attribute of this, and gets the part of the URL beginning with # */
	    var target = this.hash;

	    $('html, body').stop().animate({
	        'scrollTop': $(target).offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

