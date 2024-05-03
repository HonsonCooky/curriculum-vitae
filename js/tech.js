import { evaluationsTbl as evalTbls } from "./tech-evaluations.js";

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
  const checked = {};
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

const evalDiv = document.getElementById("evaluations");
const evalDescDiv = evalDiv.querySelector("#evaluation-descriptions");
const actions = document.getElementById("evaluation-actions");

function clearDesc() {
  evalDescDiv.innerHTML = "";
}

const resetBtn = actions.querySelector("#reset");
resetBtn.addEventListener("click", function () {
  clearDesc();
  resetChecked();
});

const evalBtn = actions.querySelector("#evaluate");
evalBtn.addEventListener("click", function () {
  evalDescDiv.classList.add("loading");
  const errorTemplate = document.getElementById("eval-error");
  const sectionTemplate = document.getElementById("eval-section");
  const subsectionTemplate = document.getElementById("eval-subsection");
  const statCardTemplate = document.getElementById("eval-stat-card");

  const overviewDataHold = {};

  function renderErrorMsg() {
    evalDescDiv.appendChild(errorTemplate.content.cloneNode(true));
  }

  let overviewElement;
  function renderOverviewSection() {
    const template = sectionTemplate.content.cloneNode(true);
    template.querySelector(".eval-title").innerHTML = "Overview";
    template.querySelector(".eval-desc").innerHTML = `<code class="inline">Confidence</code> metrics are explained per
    section, <code class="inline">Desire</code> is my ambition to work with said technology, and <code
    class="inline">Experience</code> outlines my practical application of the technology.`;

    overviewElement = template.querySelector(".eval-items");
    evalDescDiv.appendChild(template);
  }

  function loadOverviewData() {
    if (!overviewElement) return;

    for (const [k, v] of Object.entries(overviewDataHold)) {
      const statCard = statCardTemplate.content.cloneNode(true);
      statCard.querySelector(".eval-stat-header").innerHTML = k.charAt(0).toUpperCase() + k.slice(1);

      const avg = (v.confidence / v.count).toFixed(2);
      statCard.querySelector(".eval-stat-value").innerHTML = `${avg}/10`;

      const indicators = statCard.querySelector(".eval-stat-graph").children;
      for (let i = 0; i < avg; i++) indicators[i].classList.add("on");

      overviewElement.appendChild(statCard);
    }
  }

  function renderEvaluations(sectionId, description, evaluations) {
    const template = sectionTemplate.content.cloneNode(true);
    template.querySelector(".eval-title").innerHTML = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    template.querySelector(".eval-desc").innerHTML = description;

    overviewDataHold[sectionId] = {};
    for (const evaluation of evaluations) {
      renderEvaluation(evaluation, sectionId, template.querySelector(".eval-items"));
    }

    evalDescDiv.appendChild(template);
  }

  function renderEvaluation(evaluation, sectionId, parent) {
    const subsection = subsectionTemplate.content.cloneNode(true);
    subsection.querySelector(".eval-item-id").innerHTML = evaluation.name;

    overviewDataHold[sectionId]["count"] = (overviewDataHold[sectionId]["count"] ?? 0) + 1;

    const statsSection = subsection.querySelector(".eval-item-stats");
    for (const [k, v] of Object.entries(evaluation.items)) {
      const statCard = statCardTemplate.content.cloneNode(true);
      statCard.querySelector(".eval-stat-header").innerHTML = k.charAt(0).toUpperCase() + k.slice(1);
      statCard.querySelector(".eval-stat-value").innerHTML = v;

      if (typeof v === "number") {
        const indicators = statCard.querySelector(".eval-stat-graph").children;
        for (let i = 0; i < v; i++) indicators[i].classList.add("on");
        overviewDataHold[sectionId][k] = (overviewDataHold[sectionId][k] ?? 0) + v;
      } else {
        statCard.querySelector("div").removeChild(statCard.querySelector(".eval-stat-graph"));
        statCard.querySelector(".eval-stat-value").innerHTML = v.join(", ");
      }

      statsSection.appendChild(statCard);
    }

    parent.appendChild(subsection);
  }

  function loadEvaluations() {
    const checkedTbls = getChecked();
    const checkedKeys = Object.keys(checkedTbls);

    clearDesc();

    if (checkedKeys.length === 0) {
      renderErrorMsg();
      return;
    }

    renderOverviewSection();

    for (const k of checkedKeys) {
      const checkedItems = checkedTbls[k];
      const content = evalTbls[k];
      const evaluations = checkedItems.map((s) => Object({ items: content.items[s], name: s }));
      renderEvaluations(k, content.description, evaluations);
    }

    loadOverviewData();
    evalDescDiv.classList.remove("loading");
  }

  setTimeout(loadEvaluations, 0);
});

function setEvaluationHeight() {
  if (window.matchMedia("(min-width: 769px)").matches) {
    const envTbl = getComputedStyle(Array.from(tables).filter((t) => t.id === "environments")[0]);
    if (evalDiv.style.height != envTbl.height) evalDiv.style.height = envTbl.height;
  } else {
    if (evalDiv.style.height != "30dvh") evalDiv.style.height = "30dvh";
  }
}

window.addEventListener("resize", setEvaluationHeight);
setEvaluationHeight();
