function jobSwitch(number) {
	if(number==1){
		document.getElementById("job2").style.display = "none";
		document.getElementById("job3").style.display = "none";
		document.getElementById("job4").style.display = "none";
		document.getElementById("job1").style.display = "inline";
	}
	else if(number==2){
		document.getElementById("job1").style.display = "none";
		document.getElementById("job3").style.display = "none";
		document.getElementById("job4").style.display = "none";
		document.getElementById("job2").style.display = "inline";
	}
	else if(number==3){
		document.getElementById("job1").style.display = "none";
		document.getElementById("job2").style.display = "none";
		document.getElementById("job4").style.display = "none";
		document.getElementById("job3").style.display = "inline";
	}
	else if(number==4){
		document.getElementById("job1").style.display = "none";
		document.getElementById("job2").style.display = "none";
		document.getElementById("job3").style.display = "none";
		document.getElementById("job4").style.display = "inline";
	}
}

function openJobDetail(number) {
	if(number == 1){
		var change = document.getElementById("jobDescription");
		change.innerHTML = "За повече информация info@OvchUni.bg";
	}
	else if(number == 2) {
		var change = document.getElementById("jobDescription");
		change.innerHTML = "За повече информация info@OvchUni.bg1";
	}
	else if(number == 3) {
		var change = document.getElementById("jobDescription");
		change.innerHTML = "За повече информация info@OvchUni.bg2";
	}
}

document.addEventListener("DOMContentLoaded", function(){
	var url = window.location.search;
	var stringSplit = url.split("?course=");
	var courseNumber = stringSplit[1];
	if(courseNumber!=null){
		if(parseInt(courseNumber) == 1){
			openCourseDetails(1);
		}
		else if(parseInt(courseNumber) == 2) {
			openCourseDetails(2);
		}
	}
});

function openCourseDetails(number) {

	if (number == 1) {
		var change = document.getElementById("courseContent");
		change.innerHTML = "На 32 октомври започва нашият нов курс по видове викове за по лесно управление на стадото. Безплатният курс по викове с лектор Георги Кирилов полага основите за правилно управление на стадото " +
				"Курсът завършва с разработка и защита на практически курсов проект. За повече информация ehoo@OvchUni.bg";
	}
	else if (number == 2) {
		var change = document.getElementById("courseContent");
		change.innerHTML = "Запишете се сега за fast-track по дресировка на куче. Курсът е подходящ за българска овчарска и кангал. Целта на курса е да се запознаят участниците с основните принципи на дресировката. За повече информация DresiranPES@OvchUni.bg";
	}
}