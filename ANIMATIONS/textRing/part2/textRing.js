const TextInTheRing = "Helloow-mister-i-walkingd---X---"
const lettersColection = [];

const circle = document.querySelector('.circle');
circle.style = `--wlen: ${TextInTheRing.length}`

for (index in TextInTheRing) {
    console.log(TextInTheRing[index])
    const character = document.createElement('span');
    character.textContent = TextInTheRing[index];
    character.style = `--char-index: ${index}`
    character.classList.add('char');
    circle.appendChild(character);
    lettersColection.push({
        element: character,
        index,
        character: TextInTheRing[index]
    })
}


console.log(lettersColection);

const chars = document.querySelectorAll('.circle .char');

chars.forEach((char) => {

    char.style.textShadow = `
    500px 150px 10px rgba(255,255,255,0.5), 
    150px 600px 0 rgba(255,255,255,0.5), 
    600px 50px 0 rgba(255,255,255,0.5),
    400px 350px 10px rgba(255,255,255,0.5),
    200px 500px 0 rgba(255,255,255,0.5),
    500px 150px 10px rgba(255,255,255,0.5),
    500px -150px 0 rgba(255,255,255,0.5), 
    150px -600px 0 rgba(255,255,255,0.5), 
    300px -50px 0 rgba(255,255,255,0.5),
    400px -350px 10px rgba(255,255,255,0.5),
    200px -500px 0 rgba(255,255,255,0.5),
    500px -150px 0 rgba(255,255,255,0.5)`
})


window.onmousemove = function (e) {
    let x = e.clientX / -2;
    circle.style.transform = `perspective(1000px) rotateY( ${x}deg) rotateX(15deg)`;
    /* console.log(x); */
}

