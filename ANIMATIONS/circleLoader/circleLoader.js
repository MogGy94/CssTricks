console.log('cirle Loader');
const loader = document.querySelector('.loader');
const circles = loader.style.getPropertyValue('--circles');

console.log(circles);
for (let i = 0; i < circles; i++) {
    const newcircle = document.createElement("span");
    newcircle.style = `--i:${i}`;

    loader.appendChild(newcircle)
}