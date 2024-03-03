import logoImg from "../assets/HC_LOGO_LIGHT_128x128.png";

window.addEventListener("load", function() {
  Array.from(document.querySelectorAll(".logo")).forEach((i) => (i.src = logoImg));
});
