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
    description: `
    Languages are the base for each technology. These are the biggest learning curves for most developers.
    `,
  },
  environments: {
    description: `
    Programming Frameworks, Libraries and Environments are small extensions that build upon or extend programming 
    languages. Often they add layers of abstraction that enable simplier development for complex use cases. Those listed
    in this section are 
    `,
  },
  tools: {
    description: "",
  },
  devops: {
    description: "",
  },
};

const evalDiv = calcDiv.querySelector("#evaluations-descriptions");
btn.addEventListener("click", function() {
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
