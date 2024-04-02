const typingText = document.getElementById("typing-text");
let currentPhrase = 0;
const phrases = [
  " Full Stack Developer",
  " Frontend Developer",
  " Backend Developer",
  "n Integration Engineer",
  "n Infrastructure Engineer",
];
const typingSpeedBase = 100; // milliseconds

function typeWriter(phrase, i) {
  if (i < phrase.length) {
    typingText.innerHTML += phrase.charAt(i);
    setTimeout(() => typeWriter(phrase, i + 1), typingSpeedBase);
  } else {
    setTimeout(deleteWriter, 1500);
  }
}

function deleteWriter() {
  if (typingText.innerHTML.length > 0) {
    typingText.innerText = typingText.innerText.slice(0, -1);
    setTimeout(() => deleteWriter(), typingSpeedBase / 3);
  } else {
    setTimeout(nextPhrase, 1000);
    return;
  }
}

function nextPhrase() {
  const phrase = phrases[currentPhrase];
  typeWriter(phrase, 0);
  currentPhrase = (currentPhrase + 1) % phrases.length;
}

nextPhrase();
