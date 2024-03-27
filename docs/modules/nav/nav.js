const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  if (menuBtn.classList.contains("open")) {
    menuBtn.classList.remove("open");
  } else {
    menuBtn.classList.add("open");
  }
});
