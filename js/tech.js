const tables = document.getElementById("tables").querySelectorAll("table");
function setupTechTables() {
  for (const table of tables) {
    const tds = table.querySelectorAll("td");
    for (const td of tds) {
      td.addEventListener("click", function () {
        const checkbox = this.querySelector("input");
        checkbox.checked = !checkbox.checked;
      });
    }
  }
}

function getChecked() {
  const checked = [];
  for (const table of tables) {
    const checkedCells = [];
    const tds = table.querySelectorAll("td");
    for (const td of tds) {
      const span = td.querySelector("span");
      const checkbox = td.querySelector("input");
      if (checkbox.checked) {
        const itemId = span.innerText;
        checkedCells.push(itemId);
      }
    }

    if (checkedCells.length > 0) {
      checked[table.id] = checkedCells;
    }
  }
  return checked;
}

setTimeout(setupTechTables, 0);

/**---------------------------------------------------------------------------------------------------------------------
Calculations
----------------------------------------------------------------------------------------------------------------------*/

const calcDiv = document.getElementById("evaluations");
const btn = calcDiv.querySelector("button");
import { evaluationsTbl } from "./tech-evaluations.js";

const evalDiv = calcDiv.querySelector("#evaluations-descriptions");
btn.addEventListener("click", function () {
  const checked = getChecked();
  const checkedKeys = Object.keys(checked);

  // Clear the evaluations
  evalDiv.innerHTML = "";

  if (checkedKeys.length === 0) {
    const errorMsg = document.createElement("span");
    errorMsg.style.color = "var(--love)";
    errorMsg.style.fontStyle = "italic";
    errorMsg.innerHTML = "Nothing selected";
    evalDiv.appendChild(errorMsg);
    return;
  }

  // For each of the sections that have some selection
  for (const k of checkedKeys) {
    const section = document.createElement("section");
    const checkedItems = checked[k];
    const evalTbl = evaluationsTbl[k];

    const sectionTitle = document.createElement("h3");
    sectionTitle.innerHTML = k.charAt(0).toUpperCase() + k.slice(1);
    section.appendChild(sectionTitle);

    const selectedItems = document.createElement("p");
    selectedItems.className = "items";
    selectedItems.innerHTML = checkedItems.join(", ");
    section.appendChild(selectedItems);

    const sectionDesc = document.createElement("p");
    sectionDesc.className = "description";
    sectionDesc.innerHTML = evalTbl.description;
    section.appendChild(sectionDesc);

    const evals = evaluationsTbl[k].items;
    const evalKeys = Object.keys(evals).filter((j) => checkedItems.includes(j));
    const outerUl = document.createElement("ul");
    for (const j of evalKeys) {
      const metrics = Object.keys(evals[j]);
      const outerLi = document.createElement("li");
      outerLi.innerHTML = j;

      const innerUl = document.createElement("ul");
      for (const m of metrics) {
        const innerLi = document.createElement("li");
        const strong = document.createElement("strong");
        strong.innerHTML = `${m}: `;
        const text = document.createTextNode(evals[j][m]);
        innerLi.appendChild(strong);
        innerLi.appendChild(text);
        innerUl.appendChild(innerLi);
      }

      outerLi.appendChild(innerUl);
      outerUl.appendChild(outerLi);
    }

    section.appendChild(outerUl);
    evalDiv.appendChild(section);
  }
});
