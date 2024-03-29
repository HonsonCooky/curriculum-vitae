const typingText = document.getElementById("typing-text");
const phrases = ["Full Stack", "TypeScript", "C# | .Net", "Microsoft Azure", "NodeJS", "GitHub"];

let currentPhraseIndex = 0;
function nextPhrase() {
  const nextPhrase = phrases[currentPhraseIndex];
  typingText.innerHTML = nextPhrase;
  typingText.style.animationTimingFunction = `steps(1, end), steps(${nextPhrase.length}, end)`;
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

nextPhrase();
const typingAnimation = typingText.getAnimations().filter((a) => a.animationName === "typing")[0];
typingAnimation.addEventListener("finish", function() {
  nextPhrase();
  typingAnimation.play();
});
