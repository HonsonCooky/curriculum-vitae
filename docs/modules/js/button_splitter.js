setTimeout(function() {
  Array.from(document.querySelectorAll("button")).forEach((btn) => {
    const text = btn.innerText;
    btn.innerHTML = `${text
      .slice(0, -1)
      .split(" ")
      .map((s) => `<span>${s}</span>`)
      .join("")}<span>${text.slice(-1)}</span>`;
  });
}, 0);
