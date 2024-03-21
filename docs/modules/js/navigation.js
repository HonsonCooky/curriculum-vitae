const header = document.querySelector("header");
const icon = header.querySelector("i");
const nav = header.querySelector("nav");

icon.addEventListener("click", function() {
  if (icon.className.includes("oct-x")) {
    icon.className = "nf nf-oct-three_bars";
    nav.style.display = "none";
    return;
  }
  icon.className = "nf nf-oct-x";
  nav.style.display = "flex";
});

header.querySelector("button").addEventListener("click", function() {
  window.location.href = "#";
});
Array.from(nav.children).forEach((btn) => {
  btn.addEventListener("click", function() {
    const sectionId = btn.innerText.replace(".\\", "") + "-section";
    window.location.href = "#" + sectionId;
    if (icon.className.includes("oct-x")) {
      icon.className = "nf nf-oct-three_bars";
      nav.style.display = "none";
      return;
    }
  });
});

window.addEventListener("resize", function() {
  if (!window.matchMedia("(max-width: 800px)").matches) {
    nav.style.display = "flex";
  }
});

console.log();
