const header = document.querySelector("header");
const nav = header.querySelector("nav");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  const mobileOpenTag = "open";
  if (nav.classList.contains(mobileOpenTag)) {
    nav.classList.remove(mobileOpenTag);
    menuBtn.className = "nf nf-md-menu";
  } else {
    nav.classList.add(mobileOpenTag);
    menuBtn.className = "nf nf-md-close";
  }
});

window.addEventListener("resize", function () {
  const mobile = window.matchMedia("");
});
