// header variable declared in ./css.js

const mobileBtn = document.getElementById("mobile-menu-btn");
const headerLinks = document.getElementById("menu-links").querySelectorAll("a");

mobileBtn.addEventListener("click", function() {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});

for (const navLink of headerLinks) {
  navLink.addEventListener("click", function() {
    header.classList.remove("open");
  });
}

window.addEventListener("resize", function() {
  header.classList.remove("open");
});
