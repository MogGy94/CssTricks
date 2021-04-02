const banner = document.querySelector('.banner');
const blocks = document.getElementsByClassName('blocks');

for (let i = 1; i < 500; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    const duration = Math.random() * 3;
    blocks[i].style.animationDuration = `${2 * duration}s`;
    blocks[i].style.animationDelay = `${duration}s`;
}
