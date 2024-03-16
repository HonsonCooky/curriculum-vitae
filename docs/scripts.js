document.getElementById("logo-console").addEventListener("click", function() {
  const pos = document.getElementById("home-section").getBoundingClientRect().top;
  window.scrollTo({ top: pos, behavior: "smooth" });
});

Array.from(document.querySelector("nav").children).forEach((c) => {
  c.addEventListener("click", function() {
    const elementId = c.id.replace("-btn", "") + "-section";
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Unable to find ${elementId}`);
      return;
    }
    const pos = element.getBoundingClientRect().top;
    window.scrollTo({ top: pos, behavior: "smooth" });
  });
});
