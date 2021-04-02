const imageSpawn = (n) =>{
    const section = document.querySelector('section');
    for (let i = 1; i <= n; i++) {
        const {random,floor} = Math;
        const img = document.createElement('img');

        img.setAttribute( 'data-speed', floor((random() * 10 ) - 2));
        img.classList.add( 'layer');
        img.src = `./figuras/${i}.png`;
        section.appendChild(img);
    }
}

imageSpawn(12);

document.addEventListener("mousemove",parallax);

function parallax(e){
    this.querySelectorAll('.layer').forEach( layer =>{
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight -e.pageY*speed)/10;
        layer.style.transform = `translateX(${x}px) translateY(${y}px`
    })
}