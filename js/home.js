const ageValue = document.getElementById("age-value");
const today = new Date();
const birthDate = new Date("1999-06-08");
const ageTime = today.getTime() - birthDate.getTime();
const ageYears = ageTime / (1000 * 60 * 60 * 24 * 365);
ageValue.innerHTML = Math.floor(ageYears);

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
});

const resumeBtn = document.getElementById("resume-btn");
resumeBtn.addEventListener("click", function () {
  window.open("../assets/docs/HarrisonCooksCV.pdf");
});
