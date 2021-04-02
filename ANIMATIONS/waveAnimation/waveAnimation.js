const loader = document.querySelector('.loader');
const waveNumber = 15;

function addStyles(element,styles){
    for(id in styles){
      element.style[id] = styles[id];
    }
}

for (let i = 0; i < waveNumber; i++) {
    const wave = document.createElement('span');
    const positioning ={
        top:`${i*10}px`,
        bottom:`${i*10}px`,
        right: `${i*10}px`,
        left:`${i*10}px`,
        animationDelay: `${-i*0.1}s`,
    };
    addStyles(wave,positioning);
    loader.appendChild(wave);
}
