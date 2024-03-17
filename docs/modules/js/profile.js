const icons = Array.from(document.getElementById("profile-container").querySelectorAll("i"));
const colors = ["text", "love", "gold", "rose", "pine", "foam", "iris"];
const settings = [
  {
    top: "20%",
    right: "10%",
    color: colors[4],
    size: 5,
  },
  {
    top: "24%",
    right: "30%",
    color: colors[6],
    size: 5,
  },
];
// const colors = ["text", "love", "gold", "rose", "pine", "foam", "iris"];

function move(element, index) {
  setTimeout(function() {
    if (index > settings.length - 1) return;
    const setting = settings[index % settings.length];
    element.style.top = setting.top;
    element.style.right = setting.right;
    element.style.color = `var(--${setting.color})`;
    // element.style.fontSize = `0.${setting.size}em`;
    element.style.zIndex = icons.length - index;
  }, index * 200);
}

icons.forEach((element, index) => {
  element.style.display = "block";
  move(element, index);
});
