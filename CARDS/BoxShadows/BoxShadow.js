console.log("hola mUndo");

let box = document.querySelector('.box');

document.addEventListener("mousemove", (e) => {
    /*   var rocket = document.querySelector('.rocket');
      rocket.style.left = `${e.offsetX}px`;
      rocket.style.top = `${e.offsetY}px`; */
})


let shadow = "";

for (let i = 0; i < 100; i++) {
    shadow += `${(shadow ? ',' : '')}${i * 1}px ${i * 1}px 0 #e8305b`;

}

box.style.boxShadow = shadow;