const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const attr = "data-theme";
const themeBtn = document.getElementById("theme-btn");

function setTheme(theme) {
  document.documentElement.setAttribute(attr, theme);
  let classPrefix = "nf nf-md-brightness_";
  const classSuffix = theme === "dark" ? "4" : "5";
  themeBtn.className = classPrefix + classSuffix;
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute(attr);
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

themeBtn.addEventListener("click", toggleTheme);
setTheme(defaultTheme);
