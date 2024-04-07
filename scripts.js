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
const viewBtn = document.getElementById("view-btn");
const viewBtnArrow = viewBtn.querySelector("i");
const nav = header.querySelector("nav");
const openTag = "open";

function toggleNav() {
  if (nav.classList.contains(openTag)) {
    nav.classList.remove(openTag);
    viewBtnArrow.style.rotate = "0deg";
  } else {
    nav.classList.add(openTag);
    viewBtnArrow.style.rotate = "-180deg";
  }
}

viewBtn.addEventListener("click", toggleNav);

Array.from(nav.children).forEach((btn) => {
  btn.addEventListener("click", function() {
    window.location.href = `#${btn.innerText.toLowerCase()}-section`;
  });
});

window.addEventListener("click", function(event) {
  if (nav.classList.contains(openTag) && !(nav.contains(event.target) || viewBtn.contains(event.target))) {
    toggleNav();
  }
});

const main = document.body.querySelector("main");
//TODO
window.addEventListener("wheel", function(event) {
  if (main.contains(event.target)) return;
  const eventClone = new event.constructor(event.type, event);
  main.dispatchEvent(eventClone);
});
