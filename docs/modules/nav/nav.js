const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function() {
  if (menuBtn.classList.contains("open")) {
    menuBtn.classList.remove("open");
    Array.from(menuBtn.classList)
      .filter((c) => c.includes("nf-"))
      .forEach((c) => menuBtn.classList.remove(c));
    menuBtn.classList.add("nf-md-folder");
  } else {
    menuBtn.classList.add("open");
    Array.from(menuBtn.classList)
      .filter((c) => c.includes("nf-"))
      .forEach((c) => menuBtn.classList.remove(c));
    menuBtn.classList.add("nf-md-close");
  }
});
