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

function isMobile() {
  return !window.matchMedia("(min-width: 769px)").matches;
}

/**---------------------------------------------------------------------------------------------------------------------
  CSS VARIABLES
----------------------------------------------------------------------------------------------------------------------*/
const root = document.documentElement;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

root.style.setProperty("--scroll-top", header.offsetHeight + "px");
root.style.setProperty("--scroll-bottom", footer.offsetHeight + "px");

/**---------------------------------------------------------------------------------------------------------------------
  HEADER
----------------------------------------------------------------------------------------------------------------------*/
const mobileBtn = document.getElementById("mobile-menu-btn");
const headerLinks = document.getElementById("menu-links").querySelectorAll("a");

mobileBtn.addEventListener("click", function() {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});

for (const navLink of headerLinks) {
  navLink.addEventListener("click", function() {
    header.classList.remove("open");
  });
}

window.addEventListener("resize", function() {
  header.classList.remove("open");
});

/**---------------------------------------------------------------------------------------------------------------------
 HOME
----------------------------------------------------------------------------------------------------------------------*/
const ageValue = document.getElementById("age-value");
const today = new Date();
const birthDate = new Date("1999-06-08");
const ageTime = today.getTime() - birthDate.getTime();
const ageYears = ageTime / (1000 * 60 * 60 * 24 * 365);
ageValue.innerHTML = Math.floor(ageYears);

const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  footer.classList.add("expanded");
  window.scrollTo(0, document.body.scrollHeight);
});

const resumeBtn = document.getElementById("resume-btn");

/**---------------------------------------------------------------------------------------------------------------------
 ABOUT
----------------------------------------------------------------------------------------------------------------------*/
const industryExperience = document.getElementById("industry-years");
const workStart = new Date("2021-08-01");
const workingTime = today.getTime() - workStart.getTime();
const workingYears = workingTime / (1000 * 60 * 60 * 24 * 365);
const workingYearsRounded = Math.round(workingYears.toFixed(1) * 2) / 2;
industryExperience.innerHTML = workingYearsRounded;

/**---------------------------------------------------------------------------------------------------------------------
 TECH
----------------------------------------------------------------------------------------------------------------------*/
const tables = document.getElementById("tables").querySelectorAll("table");
function setupTechTables() {
  for (const table of tables) {
    const tds = table.querySelectorAll("td");
    for (const td of tds) {
      td.addEventListener("click", function() {
        const checkbox = td.querySelector("input");
        checkbox.checked = !checkbox.checked;
      });
    }
  }
}

setTimeout(setupTechTables, 0);
