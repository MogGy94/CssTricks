import Card from './Card.js';

const getSeed = (n) => {
    const { floor, random } = Math;
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let seed = ''
    for (let i = 0; i < n; i++) {
        seed += letters[floor(random() * letters.length)];
    }
    return seed;
}



class Deck {
    constructor(n) {
        this.cardsPicked = [];
        this.cardsWon = [];
        this.deck = this.getCardsInGame(n);
        this.deckShuffle();

    }

    draw() {
        const grid = document.querySelector('.grid');
        this.deck.forEach(card => {
            grid.appendChild(card.ui);
        })
    }
    getCardsInGame(n) {
        const cardsInGame = [];
        const SIZE = 200;
        const iterable = Array.from(Array(n).keys());

        iterable.forEach((i) => {
            const index = i + 1;
            const seed = getSeed(5);
            const config = {
                id: index,
                size: SIZE,
                seed,
                deck: this
            }

            const config2 = {
                id: -index,
                size: SIZE,
                seed,
                deck: this
            }

            cardsInGame.push(new Card(config));
            cardsInGame.push(new Card(config2));
        })
        return cardsInGame;
    }

    deckShuffle() {
        this.deck = this.deck.sort(() => 0.5 - Math.random());
        this.deck.forEach((card, i) => {
            card.deckPosition = i;
            /* grid.appendChild(card.ui); */
        })
    }

    checkForMatch() {
        console.log("checking");
        const score = document.querySelector('.score');
        const victory = document.querySelector('.victory');
        if (this.cardsPicked.length >= 2) {
            const cardOne = this.cardsPicked[0];
            const cardTwo = this.cardsPicked[1];
            if (cardOne.id + cardTwo.id === 0) {

                cardOne.ui.setAttribute('src', `${cardOne.source}${cardOne.done}`);
                cardTwo.ui.setAttribute('src', `${cardTwo.source}${cardTwo.done}`);
                this.cardsWon.push(cardOne);
            } else {
                setTimeout(
                    () => {
                        cardOne.ui.setAttribute('src', `${cardOne.reverse}`);
                        cardTwo.ui.setAttribute('src', `${cardTwo.reverse}`);
                    }, 1000
                )
            }
            this.cardsPicked = [];

        }

        victory.textContent = this.cardsWon.length === this.deck.length / 2 ? " YOU ARE THE NUMBER ONE" : 'Pick 2 Cards';
        score.textContent = this.cardsWon.length;
        console.log(this.cardsWon);
    }


}

export default Deck