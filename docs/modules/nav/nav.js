const header = document.querySelector("header");
const menuBtn = document.getElementById("menu-btn");
const floatingNav = document.getElementById("floating-nav");

menuBtn.addEventListener("click", function() {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    Array.from(menuBtn.classList)
      .filter((c) => c.includes("nf-"))
      .forEach((c) => menuBtn.classList.remove(c));
    menuBtn.classList.add("nf-md-folder");
  } else {
    header.classList.add("open");
    Array.from(menuBtn.classList)
      .filter((c) => c.includes("nf-"))
      .forEach((c) => menuBtn.classList.remove(c));
    menuBtn.classList.add("nf-md-close");
  }
});

const main = document.querySelector("main");
main.style.marginTop = window.getComputedStyle(header).height;
