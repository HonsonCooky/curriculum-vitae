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

const parent = document.getElementById("calculations");
const btn = parent.querySelector("button");

const evaluations = {
  languages: {
    description: "",
  },
  environments: {
    description: "",
  },
  tools: {
    description: "",
  },
  devops: {
    description: "",
  },
};

btn.addEventListener("click", function() {
  const checked = getChecked();
  for (const key of Object.keys(checked)) {
    const evals = evaluations[key];
    console.log(key, checked[key]);
  }
});
