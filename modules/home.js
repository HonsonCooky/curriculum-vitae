const typingText = document.getElementById("typing-text");
let currentPhrase = 0;
const phrases = [
  "Full Stack Developer",
  "Fontend",
  "Backend",
  "Mobile",
  "Embedded",
  "Cloud Computing",
];
const typingSpeedBase = 100; // milliseconds

function typeWriter(phrase, i) {
  if (i < phrase.length) {
    if (typingText.innerHTML.length > 0 && i === 0)
      typingText.innerHTML = phrase.charAt(i);
    else typingText.innerHTML += phrase.charAt(i);
    setTimeout(() => typeWriter(phrase, i + 1), typingSpeedBase);
  } else {
    setTimeout(deleteWriter, 1500);
  }
}

function deleteWriter() {
  if (typingText.innerHTML.length <= 1) {
    typingText.innerHTML = "&nbsp;";
    setTimeout(nextPhrase, 1000);
    return;
  }
  typingText.innerText = typingText.innerText.slice(0, -1);
  setTimeout(() => deleteWriter(), typingSpeedBase / 3);
}

function nextPhrase() {
  const phrase = phrases[currentPhrase];
  typeWriter(phrase, 0);
  currentPhrase = (currentPhrase + 1) % phrases.length;
}

nextPhrase();
