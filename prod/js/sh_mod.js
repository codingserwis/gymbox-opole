// *** Konstruktory 

let NowWod = function(){
	this.nowWod = document.getElementById('wod_now');
}
let NextWod = function(){
	this.nextWod = document.getElementById('next_wod');
}

// *** Prototypy

NowWod.prototype.displayNowWod = function(wNow){
	this.nowWod.innerText = wNow;
}
NextWod.prototype.displaynextWod = function(wNext){
	this.nextWod.innerText = wNext;
}
var wods = [
			["Zaczynamy o 8:30", "Zaczynamy o 9:00"],
			["Odpoczywamy. Zapraszamy jutro od 8:30", "Odpoczywamy. Zapraszamy jutro od 9:00", "Odpoczywamy. Zapraszamy o 15:00"],
			["OPEN Box"],
			["WOD", "WOD", "WOD", "WOD", "WOD", "WOD", "WOD"],
			[""], //["CROSS Student"]
			["TRX"],
			["CROSS Lejdis", "CROSS Lejdis"],
			["FitBox"],
			["Ciężary"],
];
const newWods = {
	start: {
		start8: 'Zaczynamy o 8:30',
		start9: 'Zaczynamy o 9:00'
	},
	rest: {
		restNextDay8: 'Odpoczywamy. Zapraszamy jutro od 8:30',
		restNextDay9: 'Odpoczywamy. Zapraszamy jutro od 9:30',
		restStart15: 'Odpoczywamy. zapraszamy od 15:00'
	},
	wod: {
		wodCoachOne: 'WOD Łukasz',
		wodCoachSecond: 'WOD Romek'
	},
	
	openBox: 'OPEN Box'
}
function checkDayOfWeek(){
	let whatDayOfWeek = new Date().getDay();
	let dayOfWeek = "";
	
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
function weekShedule(){
let nowTime = new Date().toLocaleTimeString();
let now = new NowWod();
let next = new NextWod();
// Poniedziałek
if(checkDayOfWeek() === "Mon"){
	if(nowTime < "08:30:00"){
		now.displayNowWod(wods[0][0]);
		next.displaynextWod(wods[3][0]);	
	} else if((nowTime > "08:30:01") && (nowTime < "09:29:59")){
		now.displayNowWod(wods[3][0]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "09:30:00") && (nowTime < "11:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[1][2]);	
	} else if((nowTime > "11:00:01") && (nowTime < "15:00:00")){
		now.displayNowWod(wods[1][2]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "15:00:01") && (nowTime < "16:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[4][0]);	
	} else if((nowTime > "16:00:01") && (nowTime < "17:00:00")){
		now.displayNowWod(wods[4][0]);
		next.displaynextWod(wods[5][0]);	
	} else if((nowTime > "17:00:01") && (nowTime < "18:00:00")){
		now.displayNowWod(wods[5][0]);
		next.displaynextWod(wods[3][1]);	
	} else if((nowTime > "18:00:01") && (nowTime < "19:00:00")){
		now.displayNowWod(wods[3][1]);
		next.displaynextWod(wods[3][2]);	
	} else if((nowTime > "19:00:01") && (nowTime < "20:00:00")){
		now.displayNowWod(wods[3][2]);
		next.displaynextWod(wods[6][1]);	
	} else if((nowTime > "20:00:01") && (nowTime < "21:00:00")){
		now.displayNowWod(wods[6][1]);
		next.displaynextWod(wods[1][0]);	
	} else if((nowTime > "21:00:01") && (nowTime < "23:59:59")){
		now.displayNowWod(wods[1][0]);
		next.displaynextWod(wods[6][0]);	
	}
}
// *** Wtorek ***
if(checkDayOfWeek() === "Tu"){
	if(nowTime < "08:30:00"){
		now.displayNowWod(wods[0][0]);
		next.displaynextWod(wods[6][0]);	
	} else if((nowTime > "08:30:01") && (nowTime < "09:29:59")){
		now.displayNowWod(wods[6][0]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "09:30:00") && (nowTime < "11:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[1][2]);
	} else if((nowTime > "11:00:01") && (nowTime < "15:00:00")){
		now.displayNowWod(wods[1][2]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "15:00:01") && (nowTime < "16:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "16:00:01") && (nowTime < "17:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[3][3]);	
	} else if((nowTime > "17:00:01") && (nowTime < "18:00:00")){
		now.displayNowWod(wods[3][3]);
		next.displaynextWod(wods[8][0]);	
	} else if((nowTime > "18:00:01") && (nowTime < "19:00:00")){
		now.displayNowWod(wods[8][0]);
		next.displaynextWod(wods[3][4]);	
	} else if((nowTime > "19:00:01") && (nowTime < "20:00:00")){
		now.displayNowWod(wods[3][4]);
		next.displaynextWod(wods[7][0]);	
	} else if((nowTime > "20:00:01") && (nowTime < "21:00:00")){
		now.displayNowWod(wods[7][0]);
		next.displaynextWod(wods[1][1]);
	} else if((nowTime > "21:00:01") && (nowTime < "23:59:59")){
		now.displayNowWod(wods[1][1]);
		next.displaynextWod(wods[3][4]);	
	}
}
// *** Środa ***
if(checkDayOfWeek() === "Wed"){
	if(nowTime < "08:30:00"){
		now.displayNowWod(wods[0][0]);
		next.displaynextWod(wods[3][4]);	
	} else if((nowTime > "08:30:01") && (nowTime < "09:29:59")){
		now.displayNowWod(wods[3][4]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "09:30:00") && (nowTime < "11:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[1][2]);	
	} else if((nowTime > "11:00:01") && (nowTime < "15:00:00")){
		now.displayNowWod(wods[1][2]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "15:00:01") && (nowTime < "16:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[4][0]);	
	} else if((nowTime > "16:00:01") && (nowTime < "17:00:00")){
		now.displayNowWod(wods[4][0]);
		next.displaynextWod(wods[5][0]);	
	} else if((nowTime > "17:00:01") && (nowTime < "18:00:00")){
		now.displayNowWod(wods[5][0]);
		next.displaynextWod(wods[3][1]);	
	} else if((nowTime > "18:00:01") && (nowTime < "19:00:00")){
		now.displayNowWod(wods[3][1]);
		next.displaynextWod(wods[3][4]);	
	} else if((nowTime > "19:00:01") && (nowTime < "20:00:00")){
		now.displayNowWod(wods[3][4]);
		next.displaynextWod(wods[6][1]);	
	} else if((nowTime > "20:00:01") && (nowTime < "21:00:00")){
		now.displayNowWod(wods[6][1]);
		next.displaynextWod(wods[1][0]);
	} else if((nowTime > "21:00:01") && (nowTime < "23:59:59")){
		now.displayNowWod(wods[1][0]);
		next.displaynextWod(wods[6][0]);	
	}
}
// *** Czwartek ***
if(checkDayOfWeek() === "Th"){
	if(nowTime < "08:30:00"){
		now.displayNowWod(wods[0][0]);
		next.displaynextWod(wods[6][0]);	
	} else if((nowTime > "08:30:01") && (nowTime < "09:29:59")){
		now.displayNowWod(wods[6][0]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "09:30:00") && (nowTime < "11:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[1][2]);
	} else if((nowTime > "11:00:01") && (nowTime < "15:00:00")){
		now.displayNowWod(wods[1][2]);
		next.displaynextWod(wods[2][0]);
	} else if((nowTime > "15:00:01") && (nowTime < "16:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "16:00:01") && (nowTime < "17:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[3][5]);	
	} else if((nowTime > "17:00:01") && (nowTime < "18:00:00")){
		now.displayNowWod(wods[3][5]);
		next.displaynextWod(wods[3][6]);	
	} else if((nowTime > "18:00:01") && (nowTime < "19:00:00")){
		now.displayNowWod(wods[3][6]);
		next.displaynextWod(wods[3][4]);	
	} else if((nowTime > "19:00:01") && (nowTime < "20:00:00")){
		now.displayNowWod(wods[3][4]);
		next.displaynextWod(wods[7][0]);	
	} else if((nowTime > "20:00:01") && (nowTime < "21:00:00")){
		now.displayNowWod(wods[7][0]);
		next.displaynextWod(wods[1][0]);	
	} else if((nowTime > "21:00:01") && (nowTime < "23:59:59")){
		now.displayNowWod(wods[1][0]);
		next.displaynextWod(wods[3][4]);	
	}
}
// *** Piątek ***
if(checkDayOfWeek() === "Fr"){
	if(nowTime < "08:30:00"){
		now.displayNowWod(wods[0][0]);
		next.displaynextWod(wods[6][0]);	
	} else if((nowTime > "08:30:01") && (nowTime < "09:29:59")){
		now.displayNowWod(wods[6][0]);
		next.displaynextWod(wods[2][0]);	
	} else if((nowTime > "09:30:00") && (nowTime < "11:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[1][2]);
	} else if((nowTime > "11:00:01") && (nowTime < "15:00:00")){
		now.displayNowWod(wods[1][2]);
		next.displaynextWod(wods[2][0]);
	} else if((nowTime > "15:00:01") && (nowTime < "16:00:00")){
		now.displayNowWod(wods[2][0]);
		next.displaynextWod(wods[4][0]);	
	} else if((nowTime > "16:00:01") && (nowTime < "17:00:00")){
		now.displayNowWod(wods[4][0]);
		next.displaynextWod(wods[5][0]);	
	} else if((nowTime > "17:00:01") && (nowTime < "18:00:00")){
		now.displayNowWod(wods[5][0]);
		next.displaynextWod(wods[3][6]);	
	} else if((nowTime > "18:00:01") && (nowTime < "19:00:00")){
		now.displayNowWod(wods[3][6]);
		next.displaynextWod(wods[6][0]);	
	} else if((nowTime > "19:00:01") && (nowTime < "20:00:00")){
		now.displayNowWod(wods[6][0]);
		next.displaynextWod(wods[7][0]);	
	} else if((nowTime > "20:00:01") && (nowTime < "23:59:59")){
		now.displayNowWod(wods[1][0]);
		next.displaynextWod(wods[1][0]);	
	}
}
// *** Sobota ***
if(checkDayOfWeek() === "Sa"){
		if(nowTime < "09:29:59") {
			now.displayNowWod(wods[0][1]);
			next.displaynextWod(wods[2][0]);	
		} else if((nowTime > "09:30:00") && (nowTime < "11:00:00")){
			now.displayNowWod(wods[2][1]);
			next.displaynextWod(wods[1][3]);	
		} else if((nowTime > "11:00:01") && (nowTime < "23:59:59")){
			now.displayNowWod(newWods.rest.restNextDay9);
			next.displaynextWod(newWods.openBox);	
		}
	}
// *** Niedziela ***
if(checkDayOfWeek() === "Su"){
		if(nowTime < "09:29:59") {
			now.displayNowWod(wods[0][1]);
			next.displaynextWod(wods[2][0]);	
		} else if((nowTime > "09:30:00") && (nowTime < "10:59:59")){
			now.displayNowWod(wods[2][0]);
			next.displaynextWod(wods[1][0]);	
		} else if((nowTime > "11:00:00") && (nowTime < "23:59:59")){
			now.displayNowWod(wods[1][0]);
			next.displaynextWod(wods[3][0]);	
		}
	}
}
document.addEventListener("DOMContentLoaded", function() {

weekShedule();
});