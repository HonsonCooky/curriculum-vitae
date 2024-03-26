const navBtn = document.getElementById("nav-btn");
const nav = document.querySelector("header").querySelector("nav");

let isOpen = false;
navBtn.addEventListener("click", function() {
  if (!isOpen) {
    nav.style.width = "100%";
    nav.style.height = "100%";
    nav.style.opacity = "100%";
    nav.style.fontSize = "100%";
    navBtn.className = "nf nf-md-close";
  } else {
    nav.style.width = "0%";
    nav.style.height = "0%";
    nav.style.opacity = "0%";
    nav.style.fontSize = "0%";
    navBtn.className = "nf nf-md-folder";
  }

  isOpen = !isOpen;
});
