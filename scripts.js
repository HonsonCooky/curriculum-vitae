/**---------------------------------------------------------------------------------------------------------------------
 THEME
----------------------------------------------------------------------------------------------------------------------*/

const themeAttr = "theme";
const themeBtn = document.getElementById("theme-btn");

function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute(themeAttr, theme);
}

function toggleTheme() {
  const curTheme = document.documentElement.getAttribute(themeAttr);
  setTheme(!(curTheme === "dark"));
}

const isDefaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(isDefaultDark);
themeBtn.checked = isDefaultDark;
themeBtn.addEventListener("click", toggleTheme);

/**---------------------------------------------------------------------------------------------------------------------
  CSS VARIABLES
----------------------------------------------------------------------------------------------------------------------*/
const root = document.querySelector(":root");
const footer = document.querySelector("footer");

root.style.setProperty("--scroll-bottom", footer.offsetHeight + "px");

/**---------------------------------------------------------------------------------------------------------------------
 HOME
----------------------------------------------------------------------------------------------------------------------*/
const industryExperience = document.getElementById("industry-years");
const workStart = new Date("2021-08-01");
const today = new Date();
const workingTime = today.getTime() - workStart.getTime();
const workingYears = workingTime / (1000 * 60 * 60 * 24 * 365);
industryExperience.innerHTML = workingYears.toFixed(1);

const ageValue = document.getElementById("age-value");
const birthDate = new Date("1999-06-08");
const ageTime = today.getTime() - birthDate.getTime();
const ageYears = ageTime / (1000 * 60 * 60 * 24 * 365);
ageValue.innerHTML = Math.floor(ageYears);
