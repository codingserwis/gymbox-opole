$(document).ready(function(){
	$(".navbar a, .footer_nav, a[href='#top']").on('click', function(){
		if (this.hash !== "") {
      		event.preventDefault();
      		var hash = this.hash;

    		$('html, body').animate({
      		scrollTop: $(hash).offset().top
    		}, 900, function(){
      		window.location.hash = hash;
      	});
    }	
	});
});