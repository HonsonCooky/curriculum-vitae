const typewriterText = document.getElementById("typewriter-text");
let currentPhrase = 0;
let pause = false;
let isVisible = true;
const phrases = [
  "SOFTWARE",
  "NETWORK",
  "FRONTEND",
  "BACKEND",
  "MOBILE",
  "CLOUD",
];
const colors = ["gold", "love", "foam", "iris", "pine", "text"];
const typingSpeedBase = 200; // milliseconds

function typeWriter(phrase, i) {
  if (i < phrase.length) {
    if (typewriterText.innerHTML.length > 0 && i === 0)
      typewriterText.innerHTML = phrase.charAt(i);
    else typewriterText.innerHTML += phrase.charAt(i);
    setTimeout(() => typeWriter(phrase, i + 1), typingSpeedBase);
  } else {
    setTimeout(deleteWriter, 2500);
  }
}

function deleteWriter() {
  if (typewriterText.innerHTML.length > 0) {
    typewriterText.innerText = typewriterText.innerText.slice(0, -1);
    setTimeout(() => deleteWriter(), typingSpeedBase / 3);
  } else {
    setTimeout(nextPhrase, 500);
    return;
  }
}

function nextPhrase() {
  if (!isVisible) {
    pause = true;
    return;
  }

  const phrase = phrases[currentPhrase];
  const color = colors[Math.min(currentPhrase, colors.length - 1)];
  typewriterText.innerHTML = "";
  typeWriter(phrase, 0);
  typewriterText.style.color = `var(--${color})`;
  currentPhrase = (currentPhrase + 1) % phrases.length;
}

nextPhrase();
window.addEventListener("scroll", function() {
  const rect = typewriterText.getBoundingClientRect();
  isVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  if (pause && isVisible) {
    pause = false;
    nextPhrase();
  }
});
