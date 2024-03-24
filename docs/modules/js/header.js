const header = document.querySelector("header");
const navMenu = document.querySelector("nav");
const navMobileBtn = document.getElementById("nav-mobile-btn");

/**
 * Show / Hide the mobile navigation menu
 */
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

/**
 * React to mobile navigation menu icon click
 */
const folderIconStates = ["nf-fa-folder_o", "nf-fa-folder_open_o"];
navMobileBtn.addEventListener("click", function() {
  let toAdd = navMobileBtn.classList.contains(folderIconStates[0]) ? 1 : 0;
  let toRemove = (toAdd + 1) % folderIconStates.length;
  navMobileBtn.classList.add(folderIconStates[toAdd]);
  navMobileBtn.classList.remove(folderIconStates[toRemove]);
  mobileNavMenuDisplay(toAdd === 1);
});

/**
 * Remove Mobile Navigation Menu styling from navigation panel
 */
function resetNavMobileMenu() {
  navMenu.style.cssText = "";
  navMobileBtn.classList.add(folderIconStates[0]);
  navMobileBtn.classList.remove(folderIconStates[1]);
}

/**
 * Setup navigation button interactions
 */
Array.from(header.querySelectorAll("button")).forEach((btn) => {
  let url = "#" + btn.innerText.replace(".\\", "") + "-section";
  if (btn.id === "logo") {
    url = "#";
  }

  btn.addEventListener("click", function() {
    window.location.href = url;
    resetNavMobileMenu();
  });
});

/**
 * - Toggle the nav between mobile and web depending on window size
 * - Set "Section" heights, based on the header height
 */
window.addEventListener("resize", function() {
  if (!window.matchMedia("(max-width: 600px)").matches) {
    resetNavMobileMenu();
  }
});

// Update header sticky position based on window scroll
window.addEventListener("scroll", function() {
  if (this.lastScrollY) {
    const direction = window.scrollY - this.lastScrollY;
    const isUp = direction < 0;
    if (isUp && window.scrollY > 0) {
      header.style.background = "var(--base)";
      header.style.position = "sticky";
      header.style.top = 0;
    } else {
      header.style.background = "transparent";
      header.style.position = "static";
      header.style.top = "-10vh";
    }
  }
  this.lastScrollY = window.scrollY;
});
