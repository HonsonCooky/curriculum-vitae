const themeAttrName = "theme";
const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
document.documentElement.setAttribute(themeAttrName, defaultTheme);

const themeBtn = document.getElementById("theme-btn");
const themeText = document.getElementById("theme-text");
themeText.innerText = `${defaultTheme}`;
themeBtn.addEventListener("click", function() {
  const currentTheme = document.documentElement.getAttribute(themeAttrName);
  let newTheme = "dark";
  if (currentTheme === "dark") newTheme = "light";
  document.documentElement.setAttribute(themeAttrName, newTheme);
  themeText.innerText = `${newTheme}`;
});
