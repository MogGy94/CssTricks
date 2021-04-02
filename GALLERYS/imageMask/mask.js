
var pos = document.documentElement;
pos.style.setProperty('--x', `0px`);
pos.style.setProperty('--y', `0px`);

pos.addEventListener("mousemove",e =>{
    pos.style.setProperty('--x', `${e.clientX}px`);
    pos.style.setProperty('--y', `${e.clientY}px`);
})