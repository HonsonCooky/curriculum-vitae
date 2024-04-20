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
 HOME
----------------------------------------------------------------------------------------------------------------------*/
const industryExperience = document.getElementById("industry-years");
const startDate = new Date("2021-08-01");
const todayDate = new Date();
const dateDiff = todayDate.getTime() - startDate.getTime();
const years = dateDiff / (1000 * 60 * 60 * 24 * 365);
industryExperience.innerHTML = years.toFixed(1);
