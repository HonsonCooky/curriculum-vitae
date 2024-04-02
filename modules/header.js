const header = document.querySelector("header");
const nav = header.querySelector("nav");
const menuBtn = document.getElementById("menu-btn");

function toggleMenu() {
  const openTag = "open";
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
  btn.addEventListener("click", function() {
    const sectionId = `${btn.innerText.replaceAll(".\\", "")}-section`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView();
    }
  });
}
