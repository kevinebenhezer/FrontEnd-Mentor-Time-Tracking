const daily = document.getElementById("daily");
const monthly = document.getElementById("monthly");
const weekly = document.getElementById("weekly");

//Work
const workHours = document.getElementById("work-hours");
const workPreviousHours = document.getElementById("work-previous-hours");

//Play
const playHours = document.getElementById("play-hours");
const playPreviousHours = document.getElementById("play-previous-hours");

//Study
const studyHours = document.getElementById("study-hours");
const studyPreviousHours = document.getElementById("study-previous-hours");

//Exercise
const exerciseHours = document.getElementById("exercise-hours");
const exercisePreviousHours = document.getElementById("exercise-previous-hours");

//Social
const socialHours = document.getElementById("social-hours");
const socialPreviousHours = document.getElementById("social-previous-hours");

//SelfCare
const selfcareHours = document.getElementById("selfcare-hours");
const selfcarePreviousHours = document.getElementById("selfcare-previous-hours");

//DAILY
daily.addEventListener("click", dailyHour);

function dailyHour() {
	if (!daily.classList.contains("active")) {
		daily.classList.add("active");
		workHours.innerHTML = "5hrs";
		workPreviousHours.innerHTML = "Last Day - 7hrs";
		playHours.innerHTML = "1hrs";
		playPreviousHours.innerHTML = "Last Day - 2hrs";
		studyHours.innerHTML = "0hrs";
		studyPreviousHours.innerHTML = " Last Day - 1hrs";
		exerciseHours.innerHTML = "1hrs";
		exercisePreviousHours.innerHTML = "Last Day - 1hrs";
		socialHours.innerHTML = "1hrs";
		socialPreviousHours.innerHTML = "Last Day - 3hrs";
		selfcareHours.innerHTML = "0hrs";
		selfcarePreviousHours.innerHTML = "Last Day - 1hrs";
	} else {
		daily.classList.remove("active");
	}

	if (daily.classList.contains("active")) {
		weekly.classList.remove("active");
		monthly.classList.remove("active");
	}
}

//WEEKLY
weekly.addEventListener("click", weeklyHour);

function weeklyHour() {
	if (!weekly.classList.contains("active")) {
		weekly.classList.add("active");
		workHours.innerHTML = "32hrs";
		workPreviousHours.innerHTML = "Last Week - 36hrs";
		playHours.innerHTML = "10hrs";
		playPreviousHours.innerHTML = "Last Week - 8hrs";
		studyHours.innerHTML = "4hrs";
		studyPreviousHours.innerHTML = " Last Week - 7hrs";
		exerciseHours.innerHTML = "4hrs";
		exercisePreviousHours.innerHTML = "Last Week - 5hrs";
		socialHours.innerHTML = "5hrs";
		socialPreviousHours.innerHTML = "Last Week - 10hrs";
		selfcareHours.innerHTML = "2hrs";
		selfcarePreviousHours.innerHTML = "Last Week - 2hrs";
	} else {
		weekly.classList.remove("active");
	}

	if (weekly.classList.contains("active")) {
		daily.classList.remove("active");
		monthly.classList.remove("active");
	}
}

//MONTHLY
monthly.addEventListener("click", monthlyHour);

function monthlyHour() {
	if (!monthly.classList.contains("active")) {
		monthly.classList.add("active");
		workHours.innerHTML = "103hrs";
		workPreviousHours.innerHTML = "Last Month - 128hrs";
		playHours.innerHTML = "23hrs";
		playPreviousHours.innerHTML = "Last Month - 29hrs";
		studyHours.innerHTML = "13hrs";
		studyPreviousHours.innerHTML = " Last Month - 19hrs";
		exerciseHours.innerHTML = "11hrs";
		exercisePreviousHours.innerHTML = "Last Month - 18hrs";
		socialHours.innerHTML = "21hrs";
		socialPreviousHours.innerHTML = "Last Month - 23hrs";
		selfcareHours.innerHTML = "7hrs";
		selfcarePreviousHours.innerHTML = "Last Month - 11hrs";
	} else {
		monthly.classList.remove("active");
	}

	if (monthly.classList.contains("active")) {
		daily.classList.remove("active");
		weekly.classList.remove("active");
	}
}
