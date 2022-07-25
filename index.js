//work
var workHrs = document.querySelector(".work-hr");
var workTime = document.querySelector(".work-time");
//play
var playHrs = document.querySelector(".play-hr");
var playTime = document.querySelector(".play-time");
//study
var studyHrs = document.querySelector(".study-hr");
var studyTime = document.querySelector(".study-time");
//excercise
var excHrs = document.querySelector(".exc-hr");
var excTime = document.querySelector(".exc-time");
//social
var socialHrs = document.querySelector(".social-hr");
var socialTime = document.querySelector(".social-time");
//selfcare
var selfHrs = document.querySelector(".self-hr");
var selfTime = document.querySelector(".self-time");
//button
const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");

function changeDaily() {
  workHrs.innerHTML = "5hrs";
  workTime.innerHTML = "Yesterday - 7hrs";
  playHrs.innerHTML = "1hrs";
  playTime.innerHTML = "Yesterday - 2hrs";
  studyHrs.innerHTML = "0hrs";
  studyTime.innerHTML = "Yesterday - 1hrs";
  excHrs.innerHTML = "1hrs";
  excTime.innerHTML = "Yesterday - 1hrs";
  socialHrs.innerHTML = "1hrs";
  socialTime.innerHTML = "Yesterday - 3hrs";
  selfHrs.innerHTML = "0hrs";
  selfTime.innerHTML = "Yesterday - 1hrs";
  dailyBtn.style.cssText = "color: white; font-weight: 400";
  weeklyBtn.style.cssText = "none";
  monthlyBtn.style.cssText = "none";
}

function changeWeekly() {
  workHrs.innerHTML = "32hrs";
  workTime.innerHTML = "Last Week - 36hrs";
  playHrs.innerHTML = "10hrs";
  playTime.innerHTML = "Last Week - 8hrs";
  studyHrs.innerHTML = "4hrs";
  studyTime.innerHTML = "Last Week - 7hrs";
  excHrs.innerHTML = "4hrs";
  excTime.innerHTML = "Last Week - 5hrs";
  socialHrs.innerHTML = "5hrs";
  socialTime.innerHTML = "Last Week - 10hrs";
  selfHrs.innerHTML = "2hrs";
  selfTime.innerHTML = "Last Week - 2hrs";
  weeklyBtn.style.cssText = "color: white; font-weight: 400";
  dailyBtn.style.cssText = "none";
  monthlyBtn.style.cssText = "none";
}

function changeMonthly() {
  workHrs.innerHTML = "103hrs";
  workTime.innerHTML = "Last Month - 128hrs";
  playHrs.innerHTML = "23hrs";
  playTime.innerHTML = "Last Month - 29hrs";
  studyHrs.innerHTML = "13hrs";
  studyTime.innerHTML = "Last Month - 19hrs";
  excHrs.innerHTML = "11hrs";
  excTime.innerHTML = "Last Month - 18hrs";
  socialHrs.innerHTML = "21hrs";
  socialTime.innerHTML = "Last Month - 23hrs";
  selfHrs.innerHTML = "7hrs";
  selfTime.innerHTML = "Last Month - 11hrs";
  monthlyBtn.style.cssText = "color: white; font-weight: 400";
  weeklyBtn.style.cssText = "none";
  dailyBtn.style.cssText = "none";
}
