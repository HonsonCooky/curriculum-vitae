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
    } else {
      console.log(`Missing ${sectionId}`);
    }
  });
}

window.addEventListener("resize", function () {
  if (nav.classList.contains(openTag)) toggleMenu();
});

window.addEventListener("scroll", function () {
  setTimeout(function () {}, 0);
});
