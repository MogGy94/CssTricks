let layer1 =  document.querySelector('#layer1');
let layer2 =  document.querySelector('#layer2');
let tex =  document.querySelector('#text');

let rat = window.innerWidth /window.innerHeight ;
rat = rat <= 1 ? rat :rat/1.6;
scroll = window.pageYOffset;


document.addEventListener('scroll',(e) =>{
    let offset =  window. pageYOffset;
    scroll = offset;
   /*  layer1.style.width = `${100 + scroll }%`; */
    layer1.style.bottom = `-${(scroll/10)*rat }%`;
    layer1.style.left = `-${(scroll/10)*rat }%`;
   
})

document.addEventListener('scroll',(e) =>{
    let offset =  window. pageYOffset;
    scroll = offset;
 /*    layer2.style.width = `${100 + scroll }%`; */
    layer2.style.bottom = `-${(scroll/10)*rat }%`;
    layer2.style.left = `${(scroll/10)*rat }%`;
   
})

document.addEventListener('scroll',(e) =>{
    let offset =  window. pageYOffset;
    scroll = offset;
 /*    layer2.style.width = `${100 + scroll }%`; */
    text.style.top = `-${(scroll/10)*rat }%`;

   
})
/** TO ME las imagenes de las montañas deben crecer a medida que se 
 * realiza el SCROLL de tal manera que paresca que se acerca la camara
 * a ellas;
 */