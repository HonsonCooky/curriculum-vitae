import { evaluationsTbl } from "./tech-evaluations.js";

const tables = document.getElementById("tables").querySelectorAll("table");
function setupTechTables() {
  for (const table of tables) {
    const tds = table.querySelectorAll("td");
    for (const td of tds) {
      td.addEventListener("click", function() {
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

function resetChecked() {
  for (const table of tables) {
    const tds = table.querySelectorAll("td");
    for (const td of tds) {
      const checkbox = td.querySelector("input");
      checkbox.checked = false;
    }
  }
}

setTimeout(setupTechTables, 0);

/**---------------------------------------------------------------------------------------------------------------------
Calculations
----------------------------------------------------------------------------------------------------------------------*/

const evaluationsDiv = document.getElementById("evaluations");
const actions = document.getElementById("evaluation-actions");

function setEvaluationHeight() {
  if (window.matchMedia("(min-width: 769px)").matches) {
    const envTbl = getComputedStyle(Array.from(tables).filter((t) => t.id === "environments")[0]);
    if (evaluationsDiv.style.height != envTbl.height) evaluationsDiv.style.height = envTbl.height;
  } else {
    if (evaluationsDiv.style.height != "30dvh") evaluationsDiv.style.height = "30dvh";
  }
}

const resetBtn = actions.querySelector("#reset");
resetBtn.addEventListener("click", resetChecked);

const evalDiv = evaluationsDiv.querySelector("#evaluation-descriptions");
const evalBtn = actions.querySelector("#evaluate");
evalBtn.addEventListener("click", function() {
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

  // Create the overview section (filled in later);
  const overview = document.createElement("section");
  const overviewTitle = document.createElement("h3");
  overviewTitle.innerHTML = "Overview";
  const overviewDesc = document.createElement("p");
  overviewDesc.innerHTML = `<code class="inline">confidence</code> metrics are explained per section, <code class="inline">desire</code> is my ambition to work with said technology, and <code class="inline">experience</code> outlines my practical application of the technology.`;
  overview.appendChild(overviewTitle);
  overview.appendChild(overviewDesc);
  evalDiv.appendChild(overview);
  const overviewData = {};

  // For each of the sections that have some selection
  for (const k of checkedKeys) {
    // Table Section
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

    // Evaluations
    const evals = evaluationsTbl[k].items;
    const evalKeys = Object.keys(evals).filter((j) => checkedItems.includes(j));
    const outerUl = document.createElement("ul");
    for (const j of evalKeys) {
      const metrics = Object.keys(evals[j]);
      const outerLi = document.createElement("li");
      outerLi.innerHTML = j;

      const innerUl = document.createElement("ul");
      for (const m of metrics) {
        const value = evals[j][m];
        const innerLi = document.createElement("li");
        const strong = document.createElement("strong");
        strong.innerHTML = `${m}: `;
        const text = document.createTextNode(value);
        innerLi.appendChild(strong);
        innerLi.appendChild(text);
        innerUl.appendChild(innerLi);

        if (typeof value === "number") {
          overviewData[m] = (overviewData[m] ?? 0) + value;
        }
      }

      outerLi.appendChild(innerUl);
      outerUl.appendChild(outerLi);
    }

    section.appendChild(outerUl);
    evalDiv.appendChild(section);
  }

  console.log(overviewData);
});

window.addEventListener("resize", setEvaluationHeight);
setEvaluationHeight();
