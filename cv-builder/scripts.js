// Industry Experience
const industryExperience = document.getElementById("industry-years");
const today = new Date();
const workStart = new Date("2021-08-01");
const workingTime = today.getTime() - workStart.getTime();
const workingYears = workingTime / (1000 * 60 * 60 * 24 * 365);
const workingYearsRounded = Math.round(workingYears.toFixed(1) * 2) / 2;
industryExperience.innerHTML = workingYearsRounded;

// Skillset alignment
const skillset = document.getElementById("skills");
const skillsetLis = Array.from(skillset.querySelectorAll("li"));
let maxPipe = skillsetLis.map((li) => Math.max(0, li.innerText.length - li.innerText.indexOf("|")));
console.log(maxPipe);

// for (const li of skillsetLis) {
//   const text = li.innerText;
//   const pipePos = ;
//   if (pipePos === -1) break;
//
//   const postfixLength = text.length - pipePos;
//   const diff = maxPipe - postfixLength;
//   if (diff < 1) break;
//
//   const fill = " ".repeat(diff);
//   li.innerHTML = `${text.slice(0, pipePos)}${fill}${text.slice(pipePos)}`;
// }
