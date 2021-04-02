const banner = document.querySelector('.banner');
const blocks = document.getElementsByClassName('blocks');

for (var i = 1; i < 400; i++) {
    banner.innerHTML += '<div class="blocks"></div>'
    blocks[i].style.animationDelay = `${i * 0.05}s`
}

const bannerText = document.createElement('h2');
bannerText.innerText = "Js Animation<";
bannerText.classList.add('text')
banner.appendChild(bannerText);
