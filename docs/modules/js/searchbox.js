function implementSearchBox(searchBox, searchElement) {
  if (!searchBox || !searchElement) return;

  let currentIndex = -1;
  let prevQuery = "";
  const error = "error";

  function findAndReplace(query, element) {
    const children = Array.from(element.children).filter((e) => e.innerText.length != 0);
    const regex = query.toLowerCase().split("").join(".{0,1}");
    const reg = new RegExp(regex, "gi");
    for (const child of children) {
      setTimeout(() => {
        child.innerHTML = child.innerHTML.replaceAll(reg, (match) => {
          return `<b class="marked">${match}</b>`;
        });
      }, 0);
    }
  }

  function findAndRemove(element) {
    const regex = /<b.+?"marked">.+?<\/b>/;
    const reg = new RegExp(regex, "gi");
    if (reg.test(element.innerHTML)) {
      element.innerHTML = element.innerHTML.replaceAll(reg, (match) => {
        const obj = document.createElement("div");
        obj.innerHTML = match;
        return Array.from(obj.children)[0].innerText;
      });
    }
  }

  function searchChildren(element, query, depth) {
    findAndRemove(element);

    if (depth === 0 && query != prevQuery) {
      currentIndex = -1;
      prevQuery = query;
    }

    if (query.length > 0) {
      findAndReplace(query, element);
    }

    Array.from(element.children).forEach((c) => {
      searchChildren(c, query, depth + 1);
    });
  }

  function updateHighlighted(index, matches, query) {
    if (matches.length > 0) {
      if (currentIndex != -1) matches[currentIndex].classList.remove("highlight");
      currentIndex = index;
      matches[currentIndex].classList.add("highlight");
      matches[currentIndex].scrollIntoView({ block: "center", inline: "nearest" });
    } else if (query.length > 0) {
      searchBox.classList.add(error);
    }
  }

  function findNext(query) {
    const matches = Array.from(document.querySelectorAll(".marked"));
    const index = (currentIndex + 1) % matches.length;
    updateHighlighted(index, matches, query);
  }

  function findPrevious(query) {
    const matches = Array.from(document.querySelectorAll(".marked"));
    const index = (currentIndex - 1 + matches.length) % matches.length;
    updateHighlighted(index, matches, query);
  }

  function search(newQuery, reverse) {
    if (newQuery != prevQuery) searchChildren(searchElement, newQuery, 0);
    if (reverse) {
      findPrevious(newQuery);
    } else {
      findNext(newQuery);
    }
  }

  searchBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      search(this.value, !!event.shiftKey);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      document.activeElement.blur();
    }
  });
}
