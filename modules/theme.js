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
