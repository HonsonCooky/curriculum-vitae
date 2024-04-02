const typingText = document.getElementById("typing-text");
const typingAnimation = typingText.getAnimations().filter(a => a.animationName === "typing")[0];
const deletingAnimation = typingText.getAnimations().filter(a => a.animationName === "deleting")[0];
const phrases = ["Full Stack Developer", "Frontend | TypeScript", "Backend | .Net & C#", "Integrations | Azure", "CI/CD | Pipelines"];
let currentPhrase = 0;

function loadNextTypingText() {
  typingAnimation.cancel();
  deletingAnimation.cancel();
  const nextPhrase = phrases[currentPhrase];
  const typingTextDuration = nextPhrase.length / 6;
  typingText.innerText = nextPhrase;
  typingText.style.animationTimingFunction = `step-end, steps(${nextPhrase.length}, end), steps(${nextPhrase.length}, end)`;
  typingText.style.animationDuration = `0.75s, ${typingTextDuration}s, ${typingTextDuration / 4}s`;
  typingText.style.animationDelay = `0s, 0s, ${typingTextDuration + 3}s`;
  currentPhrase = (currentPhrase + 1) % phrases.length;
  typingAnimation.play();
  deletingAnimation.play();
}

deletingAnimation.onfinish = loadNextTypingText();
loadNextTypingText();
