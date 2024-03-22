const attr = "data-theme";
const themeBtn = document.getElementById("theme-btn");

function currentTheme() {
  return document.documentElement.getAttribute(attr);
}

function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute(attr, theme);
  themeBtn.querySelector("span").innerText = theme.toUpperCase();
  themeBtn.querySelector("i").className = "nf nf-md-brightness_" + (isDark ? "4" : "5");
}

function resetTheme() {
  setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
}

themeBtn.addEventListener("click", function() {
  const isDark = currentTheme() === "dark";
  setTheme(!isDark);
});

resetTheme();
