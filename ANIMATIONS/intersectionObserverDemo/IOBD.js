const body = document.querySelector('body');

const component = (animation= "",bg="#ccc") =>{
    const section = document.createElement("section");
    const box = document.createElement('div');

    section.style.setProperty('--bg',bg);

    box.classList.add('box');
    box.style.setProperty('--animation',animation);
    
    section.appendChild(box);
    body.appendChild(section);
    return box;
}


const b1  = component();
const b2  =component("scale","#827194");
const b3  =component("rotate","#b1ab91");


const calback = (entries, observer) =>{
    entries.forEach(entry =>{
        console.log(
            entry.isIntersecting
        );
        if( entry.isIntersecting){
            entry.target.classList.add('bounce');
        }else{
            entry.target.classList.remove('bounce');
        }

    });
}


const config = {
    rootMargin: '0px',
    threshold: [ 1.0 ,.5]
}

let observer = new IntersectionObserver(calback,config)

observer.observe(b1);
observer.observe(b2);
observer.observe(b3);


