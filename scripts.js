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
const header = document.querySelector("header");
document.documentElement.style.setProperty("--scroll-top", `${header.offsetHeight}px`);

const menuBtn = document.getElementById("logo");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", function() {
  nav.className = nav.className === "open" ? "" : "open";
});

const navBtns = Array.from(nav.children);
for (const navBtn of navBtns) {
  navBtn.addEventListener("click", function() {
    nav.className = "";
  });
}

window.addEventListener("resize", function() {
  document.documentElement.style.setProperty("--scroll-top", `${header.offsetHeight}px`);
  nav.className = "";
});

window.addEventListener("click", function(event) {
  if (nav.className === "open") {
    if (menuBtn.contains(event.target) || nav.contains(event.target)) return;
    nav.className = "";
  }
});

const pages = Array.from(document.querySelector("main").children);
const threshold = window.innerHeight / 5;
window.addEventListener("scroll", function() {
  setTimeout(() => {
    for (const page of pages) {
      const rect = page.getBoundingClientRect();
      const navBtnId = `${page.id}-btn`;
      const navBtn = document.getElementById(navBtnId);
      const icon = navBtn.querySelector("i");
      if (rect.top < threshold && rect.bottom > threshold) {
        icon.className = "nf nf-fa-folder_open_o";
        navBtn.style.color = "var(--iris)";
      } else {
        icon.className = "nf nf-fa-folder";
        navBtn.style.color = "";
      }
    }
  }, 0);
});

/**--------------------------------------------------------------------------------------------------------------------
  HOME 
---------------------------------------------------------------------------------------------------------------------*/
// AGE
const ageCell = document.getElementById("home-table-age");
const ageValue = ageCell.querySelector(".main");
const ageComment = ageCell.querySelector(".side");
const birthday = new Date("1999-06-08");
const localDate = new Date();

function calcAge(birthDate, otherDate) {
  var years = otherDate.getFullYear() - birthDate.getFullYear();
  if (
    otherDate.getMonth() < birthDate.getMonth() ||
    (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())
  ) {
    years--;
  }
  return years;
}

ageValue.innerHTML = calcAge(birthday, localDate);

function loadAgeComment() {
  const timeAlive = Date.now() - birthday.getTime();
  ageComment.innerHTML = `${timeAlive.toLocaleString()}ms`;
}

loadAgeComment();

let intervalId = "";
ageCell.addEventListener("mouseenter", function() {
  intervalId = setInterval(loadAgeComment, 71);
});
ageCell.addEventListener("mouseleave", function() {
  clearInterval(intervalId);
});

// TIMEZONE
const locCell = document.getElementById("home-table-location");
const tzSide = locCell.querySelector(".side");
fetch("https://www.timeapi.io/api/TimeZone/zone?timeZone=Pacific/Auckland")
  .then((res) => res.json())
  .then((json) => {
    const utcNZHourOffset = Number.parseInt(json.currentUtcOffset.seconds) / 3600;
    if (utcNZHourOffset != 12) tzSide.innerHTML = `UTC+${utcNZHourOffset}`;
  });
