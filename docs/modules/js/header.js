const header = document.querySelector("header");
const navMenu = document.querySelector("nav");
const navMobileBtn = document.getElementById("nav-mobile-btn");

function mobileNavMenuDisplay(show) {
  navMenu.style.cssText = `
  display: ${show ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  top: ${header.scrollHeight}px;
  left: 0;
  padding: 1vh 5vw;
  `;
}

const folderIconStates = ["nf-fa-folder_o", "nf-fa-folder_open_o"];
navMobileBtn.addEventListener("click", function() {
  let toAdd = navMobileBtn.classList.contains(folderIconStates[0]) ? 1 : 0;
  let toRemove = (toAdd + 1) % folderIconStates.length;
  navMobileBtn.classList.add(folderIconStates[toAdd]);
  navMobileBtn.classList.remove(folderIconStates[toRemove]);
  mobileNavMenuDisplay(toAdd === 1);
});

// Nav button interactions
Array.from(header.querySelectorAll("button")).forEach((btn) => {
  console.log(btn);
});

// Toggle the nav between mobile and web depending on window size
window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    console.log("here");
  } else {
    navMenu.style.cssText = "";
    navMobileBtn.classList.add(folderIconStates[0]);
    navMobileBtn.classList.remove(folderIconStates[1]);
  }
});

// Update header sticky position based on window scroll
window.addEventListener("scroll", function() {
  if (this.lastScrollY) {
    const direction = window.scrollY - this.lastScrollY;
    const isUp = direction < 0;
    if (isUp && window.scrollY > header.scrollHeight) {
      header.style.background = "var(--base)";
      header.style.position = "sticky";
    } else {
      header.style.background = "transparent";
      header.style.position = "static";
    }
  }
  this.lastScrollY = window.scrollY;
});
