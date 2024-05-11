// Industry Experience
const industryExperience = document.getElementById("industry-years");
const today = new Date();
const workStart = new Date("2021-08-01");
const workingTime = today.getTime() - workStart.getTime();
const workingYears = workingTime / (1000 * 60 * 60 * 24 * 365);
const workingYearsRounded = Math.round(workingYears.toFixed(1) * 2) / 2;
industryExperience.innerHTML = workingYearsRounded;
