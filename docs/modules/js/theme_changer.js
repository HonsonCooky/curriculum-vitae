const attr = "data-theme";
const themeBtn = document.getElementById("theme-btn");

function currentTheme() {
  return document.documentElement.getAttribute(attr);
}

function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute(attr, theme);
}

function resetTheme() {
  setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
}

resetTheme();
