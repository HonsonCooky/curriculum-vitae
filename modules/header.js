const header = document.querySelector("header");
const nav = header.querySelector("nav");
const menuBtn = document.getElementById("menu-btn");
const openTag = "open";

function toggleMenu() {
  if (nav.classList.contains(openTag)) {
    nav.classList.remove(openTag);
    menuBtn.className = "nf nf-md-menu";
  } else {
    nav.classList.add(openTag);
    menuBtn.className = "nf nf-md-close";
  }
}

menuBtn.addEventListener("click", toggleMenu);
nav.addEventListener("click", toggleMenu);

const navButtons = Array.from(nav.children);
for (const btn of navButtons) {
  btn.addEventListener("click", function () {
    const sectionId = btn.id.replaceAll("-btn", "");
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView();
    }
  });
}

const main = document.querySelector("main");
const mainChildren = Array.from(main.children);

for (const child of mainChildren) {
  child.style.scrollMarginTop = header.scrollHeight + "px";
}

window.addEventListener("resize", function () {
  if (nav.classList.contains(openTag)) {
    nav.classList.remove("open");
    menuBtn.className = "nf nf-md-menu";
  }
  for (const child of mainChildren) {
    child.style.scrollMarginTop = header.scrollHeight + "px";
  }
});

window.addEventListener("scroll", function (event) {
  setTimeout(function () {
    for (const child of mainChildren) {
      const rect = child.getBoundingClientRect();
      const btnId = `${child.id}-btn`;
      const btn = document.getElementById(btnId);
      const threshold = window.innerHeight / 4;
      if (rect.top < threshold && rect.bottom > threshold) {
        btn.style.color = "var(--iris)";
      }
    }
  }, 0);
});
