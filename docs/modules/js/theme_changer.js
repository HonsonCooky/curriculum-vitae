const attr = "data-theme";
const themeBtn = document.getElementById("theme-btn");
const [lightThemeIcon, darkThemeIcon] = ["nf nf-oct-sun", "nf nf-oct-moon"];

function currentTheme() {
  return document.documentElement.getAttribute(attr);
}

function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute(attr, theme);
  themeBtn.className = isDark ? darkThemeIcon : lightThemeIcon;
}

function resetTheme() {
  setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
}

themeBtn.addEventListener("click", function() {
  const isDark = currentTheme() === "dark";
  setTheme(!isDark);
});

resetTheme();
