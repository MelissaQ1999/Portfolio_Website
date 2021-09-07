// ----- SITE LOADER ----- //
$(window).on('load',function(){
    $('#loaderInner').fadeOut('slow');
    $('#doc-loader').delay(400).fadeOut('slow');
});

// ----- Hamburgermenu (the three bars) ----- //
$(document).ready(function(){
	// Menu click event
	$('.menuBtn').click(function() {
		$(this).toggleClass('active');
			if($(this).hasClass('active')) {
                $('html').css('overflow', 'hidden');
                $('.mainMenu').addClass('act');
                $('header').addClass('act');
            }
			else {
                $('html').css('overflow', 'auto');
                $('.mainMenu').removeClass('act');
                $('header').removeClass('act');
            }
    });
});