const loader = document.querySelector('.loader');
const DOTS = 20;

for (let i = 0; i < DOTS; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.style = `--i:${i}`
    
    loader.appendChild(dot)
}