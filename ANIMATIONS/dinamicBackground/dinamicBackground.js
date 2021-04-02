const COLORS = [
    '#cffffe',
    '#f9f7d9',
    '#fce2ce',
    '#ffc1f3'
]

function squareSpawn( ) {
    const {random , floor} = Math;
    const section = document.querySelector('section');
    const square = document.createElement('span');
    const xPos = random()*innerWidth;
    const yPos = random()*innerHeight;
    const color = floor(random()*COLORS.length);
    let size =  random()*50;
    
    square.style = `--bg:${COLORS[color]}`
    square.style.width = `${20 + size}px`;
    square.style.height = `${20 + size}px`;
    square.style.left = `${xPos}px`;
    square.style.top = `${yPos}px`;
    //square.style.background = COLORS[color];
    section.appendChild(square) ;

    setTimeout(() =>{
        square.remove()
    },5000);
}

/* for (let i = 0; i < 100; i++) {
   
  requestAnimationFrame(squareSpawn, 150) ; 
} */
setInterval(squareSpawn, 50);