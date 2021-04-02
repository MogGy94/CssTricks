let bg = document.querySelector("#bg");
let moon = document.querySelector("#moon");
let mountain = document.querySelector("#mountain");
let road = document.querySelector("#road");
let text = document.querySelector("#text");

window.addEventListener('scroll',() =>{
    var offset = window.scrollY;
     
    bg.style.top = `${offset*0.5}px`;
    moon.style.left = `${-offset*0.5}px`;
    mountain.style.top = `${-offset*0.15}px`;
    road.style.top = `${offset*0.15}px`;
    text.style.top = `${offset*1}px`;
    
})