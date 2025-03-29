jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.box-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.box-header').hasClass('is-fixed')) {
		    		$('.box-header').addClass('is-visible');
		    	} else {
		    		$('.box-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.box-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.box-header').hasClass('is-fixed')) $('.box-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//toggle navigation
	$('.box-primary-nav-trigger').on('click', function(){
		$(this).toggleClass('is-clicked');
		$('nav').toggleClass('is-visible');
	});
	
	//close navigation when clicking outside
	$(document).on('click', function(event){
		if(!$(event.target).closest('nav').length && 
		   !$(event.target).closest('.box-primary-nav-trigger').length) {
			$('.box-primary-nav-trigger').removeClass('is-clicked');
			$('nav').removeClass('is-visible');
		}
	});
});