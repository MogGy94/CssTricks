const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const animation = anime.timeline({
    targets: '.text span',
    easing: 'easeInOutExpo',
    loop: true,

});

animation.add({
    rotate: () => anime.random(-360, 360),
    translateX: () => anime.random(-500, 500),
    translateY: () => anime.random(-500, 500),
    duration: 5000,
    delay: anime.stagger(20),
})
    .add({
        rotate: 0,
        translateX: 0,
        translateY: 0,
        duration: 5000,
        delay: anime.stagger(20),
    })