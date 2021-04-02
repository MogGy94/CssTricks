const size = 200;
const getSeed = (n)=>{
    const {floor,random} = Math;
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let seed = ''
    for (let i = 0; i < n; i++) {
        seed += letters[floor(random()*letters.length)];
    }
    return seed ;
}

const getCardsInGame = (n) =>{
    const cardsInGame = {}
    for (let i = 0; i < n; i++) {
        const seed =  getSeed(5);
        cardsInGame[seed] = {
            seed: seed,
            id: i,
            source: `https://picsum.photos/seed/${seed}/${size}/${size}`,
        }
    }

    return cardsInGame;
    
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

document.addEventListener('DOMContentLoaded',() =>{
    
    let cardsChosen = [];
    let cardsWon = [];

    const blankIMG = './reverse.png';
    const CARDS = getCardsInGame(10);
    const TotalCards = Object.keys(CARDS)
                        .map( carId =>([carId,carId]))
                        .flat()
                        .sort(() => 0.5 - Math.random());
    
    const grid = document.querySelector('.grid');
    const score = document.querySelector('.score');

    function createBoard(){
        for(index in TotalCards){
            var content = document.createElement('img');
            content.classList.add('blank');
            content.setAttribute('src',blankIMG);
            content.setAttribute('data-index',index);
            content.setAttribute('data-name',TotalCards[index]);
            content.addEventListener('click', flipCard);
            grid.appendChild(content);
        }
    }

    /**Chec Matches */
    function checkForMatch(){
       
        var cards = document.querySelectorAll('img');
        const ocurrece = getAllIndexes(TotalCards, cardsChosen[0]);
        const optionOne = cardsChosen[0];
        const optionTwo = cardsChosen[1];


        if(optionOne.name === optionTwo.name){
         
            cards[optionOne.index].setAttribute('src', `${CARDS[optionOne.name].source}?grayscale`);
            cards[optionTwo.index].setAttribute('src', `${CARDS[optionTwo.name].source}?grayscale`);

            cards[optionOne.index].removeEventListener('click', flipCard);
            cards[optionTwo.index].removeEventListener('click', flipCard);

            cardsWon.push(optionTwo.name);


        }else{
            setTimeout(
                function () {
                    cards[optionOne.index].setAttribute('src', blankIMG);
                    cards[optionTwo.index].setAttribute('src', blankIMG);
                    cards[optionOne.index].classList.add('blank');
                    cards[optionTwo.index].classList.add('blank');
                },1000
            )
        }

        cardsChosen = []; 
        score.textContent = cardsWon.length;
        
        if (Object.keys(CARDS).length === cardsWon.length){
            const victoryLabel = document.querySelector('.victory');
            victoryLabel.textContent = " YOU ARE THE NUMBER ONE";
        }
    }
    /**Flip Card */
    function flipCard(){
        var cardIndex = this.getAttribute('data-index');
        var cardName = this.getAttribute('data-name');
        this.setAttribute('src',CARDS[cardName].source);
        this.classList.remove('blank');
        cardsChosen.push({ index:cardIndex, name:cardName});
        
        if(cardsChosen.length === 2){
           checkForMatch()
        }
    }


    createBoard();

})