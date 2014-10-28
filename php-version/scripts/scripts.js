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
		 change.innerHTML = "Работа изисква поне 2 години опит като овчар, познаване на числата до 60 и служителят да притежава добре обучена кокошка по възможност петел, &#34;че бега по-бързо&#34;*. При преждевременно раждане пастирът да е запознт с методологията на израждане." +
		+ " Препоръчително е хората кандидастващи за работа да са преминали през цялостното обучение на ОвчУни" +
		+ "" +
		+ "*не покриваме разходите по отглеждане на пилето";
	}
	else if(number == 2) {
		var change = document.getElementById("jobDescription");
		 change.innerHTML = "Търсим хора готови да започнат революция в тази индустрия. Ще преработим кравите така че да дават уиски вместо мляко(Служителят се тества за алкохолизъм преди започване на работа), и лед вместо тор. Нашата идея е да ги вкараме във всяка чалготека за да може хората вечер да се чустват полезни и да популяризираме изразът &#34;Снощи издои ли кравата&#34; ";
	}
	else if(number == 3) {
		var change = document.getElementById("jobDescription");
		change.innerHTML = "Ние биволи не сме чували да се доят, ама вие ако можете непременно ни се обадете.";
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