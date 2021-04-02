const cardList =  document.querySelector('.card-list');
const CardNumber = 5;

const cardDefaultContent = () =>{
    d = "M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4";
    return `
    <header class="card-header">
        <p>Sep 15th 2020</p>
        <h2>Holamunod</h2>
    </header>
    <div class="card-author">
        <svg class="half-circle">
            <path d="${d}"></path>
        </svg>
        <a href="" class="author-avatar">
            <img src="./dance.gif" alt="">
        </a>
       
        <div class="author-name">
            <div class="author-name-prefix">Author</div>
            Moggy
        </div>
    </div>
    `
}

const cardSpawn = () =>{
    const card = document.createElement('article');
    card.classList.add('card');

    card.innerHTML = cardDefaultContent();

    cardList.appendChild(card);
}

for (let i = 0; i < CardNumber; i++) {
    cardSpawn();
    
}