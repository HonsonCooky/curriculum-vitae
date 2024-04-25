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
const footer = document.querySelector("footer");

root.style.setProperty("--scroll-bottom", footer.offsetHeight + "px");

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
industryExperience.innerHTML = workingYears.toFixed(1);

/**---------------------------------------------------------------------------------------------------------------------
 TECH SKILLS
----------------------------------------------------------------------------------------------------------------------*/

function loadTableCellsActions() {
  const tables = document.getElementById("tech-skills").querySelector("#tables").querySelectorAll("table");
  for (const table of tables) {
    const cells = table.querySelectorAll("td");
    for (const cell of cells) {
      cell.addEventListener("click", function() {
        if (cell.classList.contains("expanded")) {
          cell.classList.remove("expanded");
        } else {
          cell.classList.add("expanded");
        }
      });
    }
  }
}

setTimeout(loadTableCellsActions, 0);

/**---------------------------------------------------------------------------------------------------------------------
  FOOTER
----------------------------------------------------------------------------------------------------------------------*/
window.addEventListener("scroll", function() {
  const isUp = (window.lastYPos ?? 0) > window.scrollY;
  window.lastYPos = window.scrollY;

  const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
  if (atBottom && !footer.classList.contains("expanded") && !isUp) {
    footer.classList.add("expanded");
    if (!isMobile()) {
      window.scrollTo(0, document.body.scrollHeight);
    }
    return;
  }

  if (!footer.classList.contains("expanded")) return;

  const footerRect = footer.getBoundingClientRect();
  const footerYPos = window.innerHeight - footerRect.y;
  const threshold = Number.parseInt(getComputedStyle(root).getPropertyValue("--scroll-bottom"));
  if (footerYPos < threshold) {
    footer.classList.remove("expanded");
  }
});
