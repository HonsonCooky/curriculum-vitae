function scrollElementIntoView(element) {
  const pos = element.offsetTop;
  const headerSize = document.querySelector("header").offsetHeight;
  window.scrollTo({ top: pos - headerSize, behavior: "smooth" });
}

const pageSearchElement = document.getElementById("page-search");
pageSearchElement.addEventListener("click", function() {
  pageSearchElement.querySelector("input").focus();
});

const consoleLogo = document.getElementById("logo-console");
consoleLogo.addEventListener("click", function() {
  const home = document.getElementById("home-section");
  scrollElementIntoView(home);
});

const navBtns = Array.from(document.querySelector("nav").children);
navBtns.forEach((c) => {
  if (!c.id.includes("btn")) return;
  c.addEventListener("click", function() {
    const elementId = c.id.replace("-btn", "") + "-section";
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Unable to find ${elementId}`);
      return;
    }
    scrollElementIntoView(element);
  });
});
