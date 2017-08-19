var checkDay = (function(){

	var _NowWod = function(){
 		this._nowWod = document.getElementById('wod_now');
 	}

 	_NowWod.prototype.displayNowWod = function(wNow){
 		this._nowWod.innerText = wNow;
 }

	var _checkDayOfWeek = function(){
			var whatDayOfWeek = new Date().getDay();
			var dayOfWeek = "";
		
		if(whatDayOfWeek === 0){
			dayOfWeek = "Su";
		} else if(whatDayOfWeek === 1){
			dayOfWeek = "Mon";
		} else if(whatDayOfWeek === 2){
			dayOfWeek = "Tu";
		} else if(whatDayOfWeek === 3){
			dayOfWeek = "Wed";
		} else if(whatDayOfWeek === 4){
			dayOfWeek = "Th";
		} else if(whatDayOfWeek === 5){
			dayOfWeek = "Fr";
		} else if(whatDayOfWeek === 6){
			dayOfWeek = "Sa";
		}
	return dayOfWeek;
	}

	var _checkHour = function(){
		var day = null;
		var now = new _NowWod();
		if(_checkDayOfWeek() == "Mon"){
			 day = now.displayNowWod("Poniedziałek");
		} else {
			day = "inny dzień";
		}
		return day;
	}
	var _init = function(){
		_checkHour();
	}

return {
	init : _init
}

})();
checkDay.init();
