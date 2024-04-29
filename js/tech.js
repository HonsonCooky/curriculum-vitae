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
      "Programming Languages are basis for all software development. Some languages are designed with very specific use-cases, others are more generic. However, each language has it's own flavor and idea",
    notListedWarning: "Whilst programming languages are hard to learn, like other languages, learning",
  },
  environments: {
    description:
      "Frameworks, Libraries, and Environments extend upon programming languages with abstractions or computations. These tools ",
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
