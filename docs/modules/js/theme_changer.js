const attr = "data-theme";

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
