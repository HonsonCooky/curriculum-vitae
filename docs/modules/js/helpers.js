export function scrollIntoView(id) {
  const elementPos = document.getElementById(id)?.offsetTop;
  const headerSize = document.querySelector("header")?.offsetHeight;
  console.log(elementPos, headerSize);
  if (!elementPos || !headerSize) return;
  window.scrollTo({ top: elementPos - headerSize, behavior: "smooth" });
}
