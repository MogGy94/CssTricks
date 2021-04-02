/**requestAnimationFrame
 * es una funcion que se llama desde el objeto window
 *s 
*/

const circle = document.querySelector('.blue-circle');
let pos = 0;

function move (){
    pos+=10;
    circle.style.setProperty('--offset',`${pos}px`);
    /* circle.style.setProperty('transform',`translate(${pos}px)`); */
    /* circle.style.setProperty('left', `${pos}px`); */
    pos = pos > 900 ?  -630 :pos; 
    requestAnimationFrame(move);
}

move();