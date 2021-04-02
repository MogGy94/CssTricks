const container = document.querySelector('.container');
const fragment = document.createDocumentFragment();


for (let i = 0; i <= 100; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    fragment.appendChild(block);
}

container.appendChild(fragment);

function animateBlocks() {
    anime({
        targets: '.block',
        translateX: () => {
            return anime.random(-700, 700)
        },
        translateY: () => {
            return anime.random(-700, 700)
        },
        scale: () => anime.random(1, 5),
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks

    })
}

animateBlocks();