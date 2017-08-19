function workoutNavi(){
	var tabAll = document.getElementById('all_workouts');
	var tabWod = document.getElementById('table_wod');
	var tabTrx = document.getElementById('trx');
	var tabLejdis = document.getElementById('lejdis');
	var tabStudent = document.getElementById('student');
	var tabWeights = document.getElementById('weights');
	var tabOpen = document.getElementById('open');

			if(this.dataset.link === "allworkouts"){
				tabAll.style.display = "inline-block";
				tabWod.style.display = "none";
				tabTrx.style.display = "none";
				tabLejdis.style.display = "none";
				tabStudent.style.display = "none";
				tabWeights.style.display = "none";
				tabOpen.style.display = "none";
			} else if(this.dataset.link === "wod"){
				tabAll.style.display = "none";
				tabWod.style.display = "inline-block";
				tabTrx.style.display = "none";
				tabLejdis.style.display = "none";
				tabStudent.style.display = "none";
				tabWeights.style.display = "none";
				tabOpen.style.display = "none";
			} else if(this.dataset.link === "trx"){
				tabAll.style.display = "none";
				tabWod.style.display = "none";
				tabTrx.style.display = "inline-block";
				tabLejdis.style.display = "none";
				tabStudent.style.display = "none";
				tabWeights.style.display = "none";
				tabOpen.style.display = "none";
			} else if(this.dataset.link === "lejdis"){
				tabAll.style.display = "none";
				tabWod.style.display = "none";
				tabTrx.style.display = "none";
				tabLejdis.style.display = "inline-block";
				tabStudent.style.display = "none";
				tabWeights.style.display = "none";
				tabOpen.style.display = "none";
			} else if(this.dataset.link === "student"){
				tabAll.style.display = "none";
				tabWod.style.display = "none";
				tabTrx.style.display = "none";
				tabLejdis.style.display = "none";
				tabStudent.style.display = "inline-block";
				tabWeights.style.display = "none";
				tabOpen.style.display = "none";
			} else if(this.dataset.link === "weights"){
				tabAll.style.display = "none";
				tabWod.style.display = "none";
				tabTrx.style.display = "none";
				tabLejdis.style.display = "none";
				tabStudent.style.display = "none";
				tabWeights.style.display = "inline-block";
				tabOpen.style.display = "none";
			} else if(this.dataset.link === "open"){
				tabAll.style.display = "none";
				tabWod.style.display = "none";
				tabTrx.style.display = "none";
				tabLejdis.style.display = "none";
				tabStudent.style.display = "none";
				tabWeights.style.display = "none";
				tabOpen.style.display = "inline-block";
			}
		}
document.addEventListener("DOMContentLoaded", function() {
	var link = document.querySelectorAll('a[data-link]');
		for(var i = 0; i < link.length; i++){
			link[i].addEventListener('click', workoutNavi);
		}
});