const homeBtn = document.getElementById("home-btn");
const pages = document.getElementById("pages");

function scrollIntoView(id) {
  const elementPos = document.getElementById(id)?.offsetTop;
  const header = document.querySelector("header");
  const headerComputed = window.getComputedStyle(header);
  const headerSize =
    header.offsetHeight + Number.parseFloat(headerComputed.marginTop) + Number.parseFloat(headerComputed.marginBottom);

  window.scrollTo({ top: elementPos - headerSize, behavior: "smooth" });
}

function toggleMobileNavBtns(off) {
  if (window.matchMedia("(max-width: 600px)").matches) {
    if (window.getComputedStyle(pages).display === "none" && !off) {
      pages.style.display = "flex";
      homeBtn.querySelector("i").style.rotate = "90deg";
    } else {
      pages.style.display = "none";
      homeBtn.querySelector("i").style.rotate = "0deg";
    }
  }
}

window.addEventListener("click", function (event) {
  if (
    !(pages.contains(event.target) || homeBtn.contains(event.target)) &&
    window.getComputedStyle(pages).display != "none"
  ) {
    toggleMobileNavBtns(true);
  }
});

homeBtn.addEventListener("click", function () {
  if (window.getComputedStyle(pages).display === "none") {
    toggleMobileNavBtns();
  } else {
    toggleMobileNavBtns(true);
    scrollIntoView("home-section");
  }
});

Array.from(pages.querySelectorAll("button")).forEach((navBtn) => {
  navBtn.addEventListener("click", function () {
    const sectionId = navBtn.id.replace("btn", "section");
    toggleMobileNavBtns(true);
    scrollIntoView(sectionId);
  });
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 600px)").matches) {
    pages.style.display = "none";
  } else {
    pages.style.display = "flex";
  }
});

window.addEventListener("scroll", function (event) {
  // TODO
  console.log(event);
});
