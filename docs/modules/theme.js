/** ------------------------------------------------------
 * GLOBAL THEME CHANGING
 ------------------------------------------------------*/
const themeAttrName = "theme";
const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
document.documentElement.setAttribute(themeAttrName, defaultTheme);
