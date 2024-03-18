function scrollElementIntoView(element) {
  const pos = element.offsetTop;
  const headerSize = document.querySelector("header").offsetHeight;
  window.scrollTo({ top: pos - headerSize, behavior: "smooth" });
}

const consoleLogo = document.getElementById("logo-console");
consoleLogo.addEventListener("click", function() {
  const home = document.getElementById("home-section");
  scrollElementIntoView(home);
});

const navBtns = Array.from(document.getElementById("web-nav").children);
navBtns.forEach((btn) => {
  if (!btn.id.includes("btn")) return;
  btn.addEventListener("click", function() {
    const elementId = btn.id.replace("-btn", "") + "-section";
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Unable to find ${elementId}`);
      return;
    }
    scrollElementIntoView(element);
  });
});

window.addEventListener("scroll", function() {
  navBtns.forEach((btn) => {
    const elementId = btn.id.replace("-btn", "") + "-section";
    const element = document.getElementById(elementId);
    const elementRect = element.getBoundingClientRect();
    const breakPoint = window.innerHeight / 3;
    const children = Array.from(btn.children);

    if (elementRect.top < breakPoint && elementRect.bottom > breakPoint) {
      console.log(children);
      children.forEach((c) => (c.style.color = "var(--gold)"));
    } else {
      children.forEach((c) => (c.style.color = "inherit"));
    }
  });
});
