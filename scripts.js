/**--------------------------------------------------------------------------------------------------------------------
  THEME 
---------------------------------------------------------------------------------------------------------------------*/
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

/**--------------------------------------------------------------------------------------------------------------------
  NAVIGATION 
---------------------------------------------------------------------------------------------------------------------*/
const header = document.querySelector("header");
document.documentElement.style.setProperty("--scroll-top", `${header.offsetHeight}px`);

const pages = Array.from(document.querySelector("main").children);
const threshold = window.innerHeight / 5;
window.addEventListener("scroll", function() {
  setTimeout(() => {
    for (const page of pages) {
      const rect = page.getBoundingClientRect();
      const navBtnId = `${page.id}-btn`;
      const navBtn = document.getElementById(navBtnId);
      const icon = navBtn.querySelector("i");
      if (rect.top < threshold && rect.bottom > threshold) {
        console.log(navBtnId);
        icon.className = "nf nf-fa-folder_open";
      } else {
        icon.className = "nf nf-fa-folder";
      }
    }
  }, 0);
});
