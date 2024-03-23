/** ------------------------------------------------------
 * DYNAMIC THEME CHANGING
 ------------------------------------------------------*/
const themeBtn = document.getElementById("theme-btn");
const [lightThemeIcon, darkThemeIcon] = ["nf nf-oct-sun", "nf nf-oct-moon"];

function setThemeBtnIcon(isDark) {
  themeBtn.className = isDark ? darkThemeIcon : lightThemeIcon;
}

themeBtn.addEventListener("click", function() {
  const isDark = currentTheme() === "dark";
  setTheme(!isDark);
});

/** ------------------------------------------------------
 * GLOBAL THEME CHANGING
 ------------------------------------------------------*/
const attrName = "theme";

/** Get the current "theme" attribute value from the document */
const currentTheme = () => document.documentElement.getAttribute(attrName);

/** Set the theme of the document */
function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  setThemeBtnIcon(isDark);
  document.documentElement.setAttribute(attrName, theme);
}

function resetTheme() {
  setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
}

// On Startup, set the theme
resetTheme();
