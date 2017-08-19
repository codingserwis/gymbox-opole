$(document).ready(function() {
	var btn = $('#cookie_close_btn'),
		cookieWindow = ('#coockie_info');
	btn.on('click', function(ev){
		$('#coockie_info').animate({opacity: 0}, 500);
	});
});