const GRID_TEMPLATE = 3; 
const score = document.querySelector('.score');
const time = document.querySelector('.time');
const grid = document.querySelector('.gameBoard');
const digglet = document.querySelector('.digglet')

grid.style = `--grid:${GRID_TEMPLATE}`;

let actualScore = 0; 
let hitPosition = "";
let currentTime = time.textContent; 

for(let i = 0 ; i < GRID_TEMPLATE ; i++ ){
    for(let j = 0 ; j < GRID_TEMPLATE ; j++ ){
        const gridCell = document.createElement('div');

        gridCell.style = `grid-column: ${j+1} ; grid-row: ${i+1}`
        gridCell.classList.add('square');
        if ( i+j === 0 ){
            gridCell.classList.add('digglet');
        }
        gridCell.setAttribute('id',(i*GRID_TEMPLATE)+ j)
        grid.appendChild(gridCell);
    }
}

const cells = document.querySelectorAll('.square');


function randomSquare (){
    const {floor, random} = Math;

    cells.forEach(cell =>{
        cell.classList.remove('digglet');
    })
    let randomCell = cells[floor(random()* GRID_TEMPLATE**2)];
    randomCell.classList.add('digglet');
    /*** Declara una variable glbal */
    hitPosition = randomCell.id;
}

cells.forEach( cell =>{
    cell.addEventListener('mouseup',() =>{
        if(cell.id === hitPosition ){
            actualScore += 1;
            score.textContent = actualScore;
            hitPosition = null ;
        }
    })
})

function diggletMove (){
    let timerId = null;
    timerId = setInterval(randomSquare,1000);
}

function countDown (){
    currentTime--;
    time.textContent = currentTime;
    if (currentTime === 0){
        clearInterval(timerId);
        alert('Game Over ')
    }
}


let timerId = setInterval(countDown,1000);
diggletMove();