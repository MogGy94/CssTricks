const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop: true
})
    .add({
        targets: '.text span',
        translateY: [-600, 0], //[startValue, endValue]
        scale: [10, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: anime.stagger(100),
    })
    .add({
        targets: '.text span',
        translateX: [0, -600], //[startValue, endValue]
        scale: [1, 1],
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(100),
    })
    .add({
        targets: '.text span',
        translateX: [1000, 0], //[startValue, endValue]
        scale: [1, 0.6, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(100),
    })
    .add({
        targets: '.text span',
        translateX: () => anime.random(-500, 500),
        translateY: () => anime.random(-500, 500),
        scale: [1, 0.6, 1, 3],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: anime.stagger(100),
    })

