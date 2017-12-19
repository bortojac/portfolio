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

		// animate the scroll on click to links with #	
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
				$('nav').fadeIn(700).css('display', 'flex');				
				$('.menu').addClass('scaled');
				//$('.menuContainer').css('justify-content', 'center');
				$('.menu > h3').hide();
				$('#navSocial').fadeIn(800).css('display', 'flex');
				var navSocialHeight = $('#navSocial').height();
				console.log(navSocialHeight);
				$('#navExitButton').fadeIn(700).css(
					{
					'display': 'flex'
					}
				);
		});

		$('#navExitButton').click(function() {
			$('.menu').removeClass('scaled');
			$('nav').fadeOut(200, function () {
			});				
			$('.menu > h3').delay(700).show(0);
			$('#navSocial').fadeOut(200);
			$('#navExitButton').fadeOut(200);
		})


		// project dropdown for nav menu
		
		$('#projectLink').click(function() {	

			if ($('.projectDropDown > a:first-child()').hasClass('active')) {
				//$('a[href^="#aboutMe"]').fadeIn(700, 'swing');
				$('.projectDropDown > a').removeClass('active'); // this will have implicit loop
				$('.projectDropDown').delay(700).animate({
					height: '0'},
					200,
				'linear');						
			} else {
				//calculate height needed for dropdown menu
				var dropdownHeight = $('.projectDropDown > a:first-child()').height()*document.getElementsByClassName('swing').length;
				console.log(dropdownHeight);
				$('.projectDropDown').animate({
					height: dropdownHeight},
					200,
					'linear',
					function() {
						$('.projectDropDown > a').delay(700).addClass('active'); // this will have implicit loop
					});										
				//$('a[href^="#aboutMe"]').fadeOut(700, 'swing');
			}
		})

		// email button
		$('.fa-envelope-o').click(function() {
			window.open('mailto:jack.w.borto@gmail.com');
		});

	});

