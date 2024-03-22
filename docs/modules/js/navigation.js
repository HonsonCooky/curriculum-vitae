const header = document.querySelector("header");
const nav = header.querySelector("nav");
const mobileBtn = document.getElementById("nav-mobile");
const [mobileOpenIcon, mobileCloseIcon] = ["nf nf-md-folder", "nf nf-md-folder_open"];

// NAV MENU
mobileBtn.addEventListener("click", function() {
  if (mobileBtn.className.includes(mobileCloseIcon)) {
    mobileBtn.className = mobileOpenIcon;
    nav.style.display = "none";
    return;
  }
  mobileBtn.className = mobileCloseIcon;
  nav.style.display = "flex";
});

// HOME BTN
document.getElementById("logo").addEventListener("click", function() {
  window.location.href = "#";
});

// NAV BTNS
Array.from(nav.children).forEach((btn) => {
  if (btn.id === "theme-btn") return;
  btn.addEventListener("click", function() {
    const sectionId = btn.innerText.replace(".\\", "") + "-section";
    window.location.href = "#" + sectionId;
    if (mobileBtn.className.includes("oct-x")) {
      mobileBtn.className = "nf nf-oct-three_bars";
      nav.style.display = "none";
      return;
    }
  });
});

// Update Nav from Mobile to Web based on window size
window.addEventListener("resize", function() {
  if (!window.matchMedia("(max-width: 800px)").matches) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
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
