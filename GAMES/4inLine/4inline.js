const grid = document.querySelector('.grid');
const logo = document.querySelector('.log');
const totalCells = 42;
const cells = [];
let currentPlayer = "blue";
for(let i = 0 ; i < totalCells ; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    cells.unshift(cell);
    if(i >= 35){
        cell.classList.add('taken');
    }
}

console.log(cells);
const GAME = () =>{
    console.log('Game running');

    const currentP = document.querySelector('.currentP');
    const results = document.querySelector('.results');

    for (let i = 0; i < cells.length; i++) (
        function (index) {
            cells[i].onclick = function (){
                console.log(index + 7);
                if(cells[index ].classList.contains('taken')){
                    if(currentPlayer === 'blue'){
                        cells[index +7].classList.add('taken');
                        cells[index].classList.add('player-blue');
                        currentPlayer = 'red'; 
                        currentP.textContent = "red";

                    }else if (currentPlayer === 'red'){
                        cells[index+7].classList.add('taken');
                        cells[index].classList.add('player-red');
                        currentPlayer = 'blue'
                        currentP.textContent = "blue"
                    }
                }else {
                    logo.textContent = "cant Go Here"
                    setTimeout(() => {
                        logo.textContent = ""
                    },1000)
                }
            }
        }
    )(i)

}


document.addEventListener('DOMContentLoaded', ()=> GAME())