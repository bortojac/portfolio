$(document).ready(
	function() {
		
		// create fade from bottom
		var $animation_elements = $('.animateThese');
		var $window = $(window);
		
		function check_if_in_view() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);
		
		  $.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);
		
			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
			  (element_top_position <= window_bottom_position)) {
			  $element.addClass('in-view');
			} else {
			  $element.removeClass('in-view');
			}
		  });
		}
		
		$window.on('scroll resize', check_if_in_view);
		/*trigger a scroll event as soon as the DOM is ready. We do this so that if any of the elements which should be animated are within the viewport, they will be detected as in view and the animation applied as if we had scrolled.*/
		$window.trigger('scroll');

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

		// scale the homepage button on click

		$('#menuButton').click(function() {
			//console.log($('#menuButton').css('transform'));
			if ($('.menu').css('transform') === 'none') {
				$('nav').fadeIn(700);				
				$('.menu').addClass('scaled');
				$('.menu > h3').hide();
			} else {
				$('.menu').removeClass('scaled');
				$('nav').fadeOut();				
				$('.menu > h3').delay(700).show(0);
			}
		});

		// project dropdown
		$('#projectLink').click(function() {			
			$('nav > a:last-child()').fadeToggle(400, 'swing', function() {
				$('.projectDropDown').slideToggle(600);
			});
		});

	});

