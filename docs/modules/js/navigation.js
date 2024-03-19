import helpers from "./helpers";

const homeBtn = document.getElementById("home-btn");
const pages = document.getElementById("pages");

homeBtn.addEventListener("click", function() {
  if (window.getComputedStyle(pages).display === "none") {
    pages.style.display = "flex";
  } else {
    pages.style.display = "none";
    helpers.scrollIntoView("home-section");
  }
});
