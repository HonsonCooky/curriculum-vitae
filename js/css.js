const root = document.documentElement;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

root.style.setProperty("--scroll-top", header.offsetHeight + "px");
root.style.setProperty("--scroll-bottom", footer.offsetHeight + "px");
