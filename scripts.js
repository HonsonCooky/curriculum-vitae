/**--------------------------------------------------------------------------------------------------------------------
  THEME 
---------------------------------------------------------------------------------------------------------------------*/
const themeAttr = "theme";
const themeBtn = document.getElementById("theme-btn");

function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  const iconIndex = theme === "dark" ? 4 : 7;
  document.documentElement.setAttribute(themeAttr, theme);
  themeBtn.className = `nf nf-md-brightness_${iconIndex}`;
}

function toggleTheme() {
  const curTheme = document.documentElement.getAttribute(themeAttr);
  setTheme(!(curTheme === "dark"));
}

setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
themeBtn.addEventListener("click", toggleTheme);

/**--------------------------------------------------------------------------------------------------------------------
  HEADER SIZE SCROLL MARGIN 
---------------------------------------------------------------------------------------------------------------------*/
const header = document.querySelector("header");
document.documentElement.style.setProperty("--scroll-margin-top", header.offsetHeight + "px");
window.addEventListener("resize", () => {
  document.documentElement.style.setProperty("--scroll-margin-top", header.offsetHeight + "px");
});

/**--------------------------------------------------------------------------------------------------------------------
  NAVIGATION 
---------------------------------------------------------------------------------------------------------------------*/
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
