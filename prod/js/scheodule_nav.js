	function arrow(a){
		var span = this.querySelector('span.glyphicon');
				span.classList.toggle('glyphicon-menu-down');
				span.classList.toggle('glyphicon-menu-up');
	}
document.addEventListener("DOMContentLoaded", function() {
	var button = document.querySelectorAll('button[data-button="grafik"]');
	
	for(var i = 0; i < button.length; i++){
		button[i].addEventListener('click', arrow);
	}
});