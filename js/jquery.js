$(document).ready(
	function() {
		$('a[href^="#"]').hide();
		// show the circle links when they click Projects
		$('#navProjects').on('click', function (e) {
			$('a[href^="#"]').toggle();			
			return false;
		});
		// animate the scroll	
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			/*this.hash reads the href attribute of this, and gets the part of the URL beginning with # */
			var target = this.hash;

			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
			});
		});
	});

