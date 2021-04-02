

const setNewVariableInRoot = (name, value) => {
    document.documentElement.style.setProperty(`--${name}`, value);
}

class Card {
    constructor(config) {
        const { seed, id, size, deck } = config;
        this.deckPosition;
        this.id = id;
        this.seed = seed;
        this.size = size;
        this.deck = deck;/**DECK REFERENCE */

        this.done = '?grayscale';
        this.reverse = `../reverse.png`;
        this.source = `https://picsum.photos/seed/${this.seed}/${this.size}/${this.size}`;
        this.ui = this.cardTemplate();
        /* this.ui = this.cardTemplate2(); */
        this.input
    }

    instanciateListener() {

    }

    flipCard() {
        this.ui.setAttribute('src', this.source);
        this.ui.classList.remove('blank');
        this.deck.cardsPicked.push(this);
        this.deck.checkForMatch();
    }

    cardTemplate() {
        const cardUI = document.createElement('div');
        const input = document.createElement('input');
        const bg1 = document.createElement('span');
        const bg2 = document.createElement('span');

        input.type = "checkbox";
        cardUI.classList.add('Card')
        bg1.classList.add('bg1');
        bg2.classList.add('bg2');

        bg1.style.setProperty('--bg1', `url("${this.source}")`);
        bg1.style.setProperty('--bg2', `url("${this.reverse}")`);

        bg2.style.setProperty('--bg2', `url("${this.reverse}")`);
        bg2.style.setProperty('--bg1', `url("${this.source}")`);


        cardUI.appendChild(input);
        cardUI.appendChild(bg1);
        cardUI.appendChild(bg2);

        this.input = input

        return cardUI;
    }

    cardTemplate2() {
        const flipCard = document.createElement('div');
        const faceFront = document.createElement('span');
        const faceBack = document.createElement('span');
        const input = document.createElement('input');

        const front = document.createElement('h2');
        const back = document.createElement('h2');

        faceFront.style.setProperty('--front', `url("${this.reverse}")`);
        faceBack.style.setProperty('--back', `url("${this.source}")`);

        input.type = "checkbox";
        flipCard.classList.add('flip-card')
        faceFront.classList.add('face', 'front');
        faceBack.classList.add('face', 'back');

        front.textContent = "Front";
        back.textContent = "Back"

        faceFront.appendChild(front);
        faceBack.appendChild(back);
        flipCard.appendChild(input)
        flipCard.appendChild(faceFront);
        flipCard.appendChild(faceBack);

        return flipCard;
    }
}


const CardUITemplate = `
       <div class="card">
        <div class="face front">
            <h2>Front</h2>
        </div>
        <div class="face back">
            <h2>Back</h2>
        </div>
    </div>
`

export default Card; 