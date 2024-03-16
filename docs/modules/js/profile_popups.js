const icons = Array.from(document.getElementById("profile-container").querySelectorAll("i"));
const colors = ["text", "love", "gold", "rose", "pine", "foam", "iris"];
const settings = [
  {
    top: "20%",
    left: "85%",
    color: colors[4],
    size: 7,
  },
  {
    top: "24%",
    left: "66%",
    color: colors[6],
    size: 5,
  },
  {
    top: "8%",
    left: "80%",
    color: colors[0],
    size: 6,
  },
  {
    top: "10%",
    left: "60%",
    color: colors[5],
    size: 5,
  },
  {
    top: "2%",
    left: "50%",
    color: colors[1],
    size: 4,
  },
  {
    top: "2%",
    left: "0%",
    color: colors[2],
    size: 6,
  },
];
// const colors = ["text", "love", "gold", "rose", "pine", "foam", "iris"];

function move(element, index) {
  setTimeout(function() {
    if (index > settings.length - 1) return;
    const setting = settings[index % settings.length];
    element.style.top = setting.top;
    element.style.left = setting.left;
    element.style.color = `var(--${setting.color})`;
    element.style.fontSize = `${setting.size}vh`;
    element.style.zIndex = icons.length - index;
  }, index * 100);
}

icons.forEach((element, index) => {
  element.style.display = "block";
  move(element, index);
});
