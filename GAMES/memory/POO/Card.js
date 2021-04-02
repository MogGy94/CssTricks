

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
        this.ui = this.buildCard();
    }

    instanciateListener() {

    }

    flipCard() {

        this.ui.setAttribute('src', this.source);
        this.ui.classList.remove('blank');
        this.deck.cardsPicked.push(this);
        this.deck.checkForMatch();
    }

    buildCard() {
        var cardUI = document.createElement('img');
        cardUI.classList.add('blank');
        cardUI.setAttribute('src', this.reverse);
        cardUI.addEventListener('click', this.flipCard.bind(this));
        cardUI.style.ad

        return cardUI;
    }
}

export default Card; 