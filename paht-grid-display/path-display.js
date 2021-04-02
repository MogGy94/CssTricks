const continer = document.querySelector('.container');
const gridCells= 2500;

for (let i = 0; i < gridCells; i++) {
    let CELL = document.createElement("div")
    CELL.classList.add("box");
    continer.appendChild(CELL)
}