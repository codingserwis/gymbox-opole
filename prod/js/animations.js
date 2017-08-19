// *** show and hide TO-TOP button ***
$(window).scroll(function(){
	var winTop = $(window).scrollTop();
	$(".scroll_top").each(function(){
		if(winTop > 600){
			$(this).css("opacity", "1");
		} else {
			$(this).css("opacity", "0");
		}
	});

// *** toogle betwen navigations ***
	var $header = $('.header');
	var $topContact = $('#top_contact');
	var $margin = $('.margin_20');
	var $topLogo = $('#top_logo');
	var $navbarLinks = $('.navbar-nav > li > a');
	var $navbarActiveLinks = $('.navbar-nav > .active > a');
	var $navbarIconBar = $('.navbar-default .navbar-toggle .icon-bar');
	$header.each(function(){
		var winTop = $(window).scrollTop();
		if (winTop > 60){
			$(this).addClass('small_header');
			$topContact.slideUp(300);
			$margin.css({"margin": "10px 0 0 0", "padding-top": "10px"});
			$topLogo.attr("src", "./assets/img/gymbox_sm_logo.png");
			$navbarLinks.css("color", "#1A1A1A");
			$navbarActiveLinks.css("color", "#b82027");
			$navbarIconBar.css("background-color", "#1A1A1A");
		} else {
			$(this).removeClass("small_header");
			$topContact.slideDown(300);
			$margin.removeAttr('style');
			$topLogo.attr("src", "./assets/img/gymbox_logo.png");
			$navbarLinks.removeAttr('style');
			$navbarActiveLinks.removeAttr('style');
			$navbarIconBar.removeAttr('style');
		}
	});
// *** slide to top elements ***
	var $addSlideIn = $('.slidein');

		$addSlideIn.each(function(){
			var pos = $(this).offset().top;
			if(pos < winTop + 600){
				$(this).addClass('slide_top');
			}
	});

// *** slide to bottom elements ***
	var $addSlideOut = $('.slideout');
	
		$addSlideOut.each(function(){
			var pos = $(this).offset().top;
			if(pos < winTop + 600){
				$(this).addClass('slide_buttom');
			}
	});
});