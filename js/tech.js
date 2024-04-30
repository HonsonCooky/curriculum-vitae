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
        const itemId = span.innerText.toLowerCase().replace(".", " ").trim().replace(/[\s-]/g, "_");
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

const evaluationsTbl = {
  languages: {
    description:
      "Programming Languages are basis for all software development. Confidence meters below take into account knowledge of keywords, fundamental data types, naming conventions, file structures, and general philosophies.",
    warning:
      "In my journey as a developer, I've found that while programming languages can be quite daunting to learn at first, my extensive experience has revealed a pattern of similarities among them. This insight has made it increasingly easier for me to adapt and quickly pick up new languages.",
  },
  environments: {
    description:
      "Frameworks, Libraries, and Programming Environments are extensions (or execution environments) that enable make programming languages real weapons. They tend to be easier to learn and adapt to, but sophisticated extensions can certainly be more difficult to learn.",
  },
  tools: {
    description: "",
  },
  devops: {
    description: "",
  },
};

const evalDiv = calcDiv.querySelector("#evaluations-descriptions");
btn.addEventListener("click", function () {
  const checked = getChecked();

  // Clear the evaluations
  evalDiv.innerHTML = "";

  // For each of the sections that have some selection
  for (const k of Object.keys(checked)) {
    const section = document.createElement("section");
    const evalTbl = evaluationsTbl[k];

    const sectionTitle = document.createElement("h3");
    sectionTitle.innerHTML = k.charAt(0).toUpperCase() + k.slice(1);
    section.appendChild(sectionTitle);

    const sectionDesc = document.createElement("p");
    sectionDesc.innerHTML = evalTbl.description;
    section.appendChild(sectionDesc);

    // For each of the selected technologies

    evalDiv.appendChild(section);
  }
});
