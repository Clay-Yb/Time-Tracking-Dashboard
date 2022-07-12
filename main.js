const data = [
	{
		id: 1 /*daily*/,

		wdaily: "5hrs",
		wpdaily: "7hrs",

		playdaily: "1hr",
		playpdaily: "2hrs",

		studydaily: "0hrs",
		studypdaily: "1hr",

		exedaily: "1hr",
		exepdaily: "1hr",

		socialdaily: "1hrs",
		socialpdaily: "3hrs",

		selfdaily: "0hrs",
		selfpdaily: "1hrs",
	},
	{
		id: 2 /*weekly*/,

		wdaily: "32hrs",
		wpdaily: "36hrs",

		playdaily: "10hrs",
		playpdaily: "8hrs",

		studydaily: "4hrs",
		studypdaily: "7hrs",

		exedaily: "4hrs",
		exepdaily: "5hrs",

		socialdaily: "5hrs",
		socialpdaily: "10hrs",

		selfdaily: "2hrs",
		selfpdaily: "2hrs",
	},
	{
		id: 2 /*Monthly*/,

		wdaily: "103hrs",
		wpdaily: "128hrs",

		playdaily: "23hrs",
		playpdaily: "29hrs",

		studydaily: "13hrs",
		studypdaily: "19hrs",

		exedaily: "11hrs",
		exepdaily: "18hrs",

		socialdaily: "21hrs",
		socialpdaily: "23hrs",

		selfdaily: "7hrs",
		selfpdaily: "11hrs",
	},
];

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

const workDailyHrs = document.getElementById("work_daily_hrs");
const workPDailyHrs = document.getElementById("work_daily_prev_hrs");

const playDailyHrs = document.getElementById("play_daily_hrs");
const playPDailyHrs = document.getElementById("play_daily_prev_hrs");

const studyDailyHrs = document.getElementById("study_daily_hrs");
const studyPDailyHrs = document.getElementById("study_daily_prev_hrs");

const exeDailyHrs = document.getElementById("exe_daily_hrs");
const exePDailyHrs = document.getElementById("exe_daily_prev_hrs");

const socialDailyHrs = document.getElementById("social_daily_hrs");
const socialPDailyHrs = document.getElementById("social_daily_prev_hrs");

const selfDailyHrs = document.getElementById("self_daily_hrs");
const selfPDailyHrs = document.getElementById("self_daily_prev_hrs");

// window.addEventListener("DOMContentLoaded", () => {
// 	loadData(0);
// });

const loadData = (i) => {
	let item = data[i];
	workDailyHrs.textContent = item.wdaily;
	workPDailyHrs.textContent = item.wpdaily;

	playDailyHrs.textContent = item.playdaily;
	playPDailyHrs.textContent = item.playpdaily;

	studyDailyHrs.textContent = item.studydaily;
	studyPDailyHrs.textContent = item.studypdaily;

	exeDailyHrs.textContent = item.exedaily;
	exePDailyHrs.textContent = item.exepdaily;

	socialDailyHrs.textContent = item.socialdaily;
	socialPDailyHrs.textContent = item.socialpdaily;

	selfDailyHrs.textContent = item.selfdaily;
	selfPDailyHrs.textContent = item.selfpdaily;
};

dailyBtn.addEventListener("click", () => {
	loadData(0);
});

weeklyBtn.addEventListener("click", () => {
	loadData(1);
});
monthlyBtn.addEventListener("click", () => {
	loadData(2);
});
