/**--------------------------------------------------------------------------------------------------------------------
  THEME 
---------------------------------------------------------------------------------------------------------------------*/
const themeAttr = "theme";
const themeBtn = document.getElementById("theme-btn");

function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute(themeAttr, theme);
}

function toggleTheme() {
  const curTheme = document.documentElement.getAttribute(themeAttr);
  setTheme(!(curTheme === "dark"));
}

const isDefaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(isDefaultDark);
themeBtn.checked = isDefaultDark;
themeBtn.addEventListener("click", toggleTheme);

/**--------------------------------------------------------------------------------------------------------------------
  NAVIGATION 
---------------------------------------------------------------------------------------------------------------------*/
const openTag = "open";
const header = document.querySelector("header");
const headerBtns = header.querySelectorAll(":scope > div > button");
const headerPairs = Array.from(headerBtns).map((btn) => {
  const nav = document.getElementById(btn.id.replaceAll("-btn", "-nav"));
  return {
    btn,
    nav,
  };
});

function toggleNav(btn, nav, off) {
  const icon = btn.querySelector("i");
  if (nav.classList.contains(openTag) || off) {
    nav.classList.remove(openTag);
    icon.style.rotate = "0deg";
  } else {
    nav.classList.add(openTag);
    icon.style.rotate = "-180deg";
  }
}

for (const { btn, nav } of headerPairs) {
  btn.addEventListener("click", () => {
    headerPairs.forEach(({ btn: oBtn, nav: oNav }) => {
      if (oBtn != btn) toggleNav(oBtn, oNav, true);
    });
    toggleNav(btn, nav);
  });
}

window.addEventListener("click", function(event) {
  for (const { btn, nav } of headerPairs) {
    if (btn.contains(event.target) || nav.contains(event.target)) return;
  }

  for (const { btn, nav } of headerPairs) {
    toggleNav(btn, nav, true);
  }
});

/**--------------------------------------------------------------------------------------------------------------------
  TEXT LOADER 
---------------------------------------------------------------------------------------------------------------------*/
