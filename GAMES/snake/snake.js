const grid =  document.querySelector('.grid');
const boardDimension = (10*10);
const cells = [];
const {random , floor} = Math;

for(let i = 0; i < boardDimension ; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    cells.push(cell);
}
const snakeStart = floor(random() * boardDimension);
const appleStart = floor(random() * boardDimension);

/* cells[snakeStart].classList.add('snake');
cells[appleStart].classList.add('apple'); */

const GAME = () =>{
    const startBTN = document.querySelector('.start');
    const scoreDisplay = document.querySelector('.score');
    let cellwidth = 10; 
    let currentIndex = snakeStart;
    let appleIndex = appleStart;
    let currentSnake = [2,1,0];

    let direction = 1;
    let score = 0 ; 
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0; 

    function startGame (){
        currentSnake.forEach(index => {
            cells[index].classList.remove('snake')
        });
        cells[appleStart].classList.remove('apple');
        clearInterval(interval);
        score=0; 
        //randomApple()
        direction = 1 ; 
        scoreDisplay.textContent = score ;
        intervalTime = 1000;
        currentSnake = [2,1,0];
        
        currentIndex = 0;
        currentSnake.forEach(index => cells[index].classList.add('snake'));
        interval = setInterval(moveOutcomes, intervalTime);

    }

    function moveOutcomes (){
        console.log(currentSnake[0] + direction);
        if(
            (currentSnake[0] + cellwidth >= (cellwidth **2 ) && direction === cellwidth) ||
            (currentSnake[0] % cellwidth === (cellwidth -1) && direction === 1) ||
            (currentSnake[0] % cellwidth === 0 && direction === -1) ||
            (currentSnake[0] - cellwidth < 0 && direction === -cellwidth) ||
            cells[currentSnake[0] + direction].classList.contains('snake')
            
        ){
            return clearInterval(interval);
        }

        const tail = currentSnake.pop();
        cells[tail].classList.remove('snake');
        currentSnake.unshift(currentSnake[0] + direction);

        if (cells[currentSnake[0]].classList.contains('apple')){

            cells[currentSnake[0]].classList.remove('apple');
            cells[tail].classList.add('snake');

            currentSnake.push('tail');
            //randomApple()
            score++
            scoreDisplay.textContent = score;
            clearInterval(interval);

            intervalTime = intervalTime*speed;
            interval = setIntreval(moveOutcomes,intervalTime);
        }
        cells[currentSnake[0]].classList.add('snake')
    }


    function control (e) {
        cells[currentIndex].classList.remove('snake');
        if(e.code === 'ArrowUp' ){
            direction = 1;
        }else if (e.code === 'ArrowDown'){
            direction = -1;
        }else if (e.code === 'ArrowLeft'){
            direction = -cellwidth;
        }else if (e.code === 'ArrowRight'){
            direction = cellwidth;
        }
        console.log(direction);
    }
    document.addEventListener('keyup',control) ;
    startBTN.onclick = () =>startGame();
}


document.addEventListener('DOMContentLoaded', () => GAME());
