function workoutNavi(){
	let tabAll = document.getElementById('all_workouts');
	let tabWod = document.getElementById('table_wod');
	let tabTrx = document.getElementById('trx');
	let tabLejdis = document.getElementById('lejdis');
	let tabStudent = document.getElementById('student');
	let tabWeights = document.getElementById('weights');
	let tabOpen = document.getElementById('open');

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
document.addEventListener("DOMContentLoaded", () => {
	let link = document.querySelectorAll('a[data-link]');
		link.forEach((element) => {
			element.addEventListener('click', workoutNavi);
		});
});