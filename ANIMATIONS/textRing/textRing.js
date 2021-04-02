const TextInTheRing = "Helloow-mister-i-walkingd---X---"
const lettersColection = [];

const circle = document.querySelector('.circle');
circle.style = `--wlen: ${TextInTheRing.length}`

for (index in  TextInTheRing){
    console.log(TextInTheRing[index])
    const character = document.createElement('span');
    character.textContent = TextInTheRing[index];
    character.style = `--char-index: ${index}`
    character.classList.add('char');
    circle.appendChild(character);
    lettersColection.push( {
        element : character,
        index,
        character: TextInTheRing[index]
    })
}

console.log(lettersColection);