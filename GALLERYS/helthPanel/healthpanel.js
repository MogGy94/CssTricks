const container = document.querySelector('.container');
const gridItems =  30;
const {random,floor} = Math;

for (let i = 0; i < gridItems; i++) {
    const items = [" %",` | ${floor(random()*100)}`," °"," lbs" ," M" ," New"];
    let CELL = document.createElement("div");
    let LABEL = document.createElement("h2");
    let SIMBOL = document.createElement("span");
    let TEXT = document.createElement("p");
    
    LABEL.innerText = floor(random()*50);
    SIMBOL.innerText = items[floor(random()*items.length)];
    TEXT.innerText = "Stay Health"

    CELL.classList.add(
        floor(random()*10) % 2 === 0 ? "bg2": "bg1"
        );
    LABEL.appendChild(SIMBOL);
    CELL.appendChild(LABEL);
    CELL.appendChild(TEXT);
    container.appendChild(CELL);
}

