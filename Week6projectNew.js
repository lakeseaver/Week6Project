// create universal variable values for the suits and values of the cards:

const suits = ["♠", "♣", "♥", "♦"];
const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];

// create 52 card deck & shuffle deck:

class Deck{
    constructor(cards = newDeck()){
        this.cards = cards;
    }

    get numberOfCards(){
        return this.cards.length
    }

    shuffle(){
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

// create card class:

class Card{
    constructor(suit,value){
        this.suit = suit;
        this.value = value;
    }
}

// create two decks of 26 cards each for Player 1 & Player 2 out of the shuffled deck array:

function newDeck(){
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value)
        })
    })
}

let playerOneDeck, playerTwoDeck

startGame()
function startGame(){
    const deck = new Deck()
    deck.shuffle()

    const deckMidPoint = Math.ceil(deck.numberOfCards / 2)
    playerOneDeck = new Deck(deck.cards.slice(0,deckMidPoint))
    playerTwoDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards))

    console.log(playerOneDeck)
    console.log(playerTwoDeck)
}

// Play the Game:

let playerOnesScore = 0;
let playerTwosScore = 0;

for(let i = 0; i < 26; i++){
    let playerOneCard = playerOneDeck.cards[i].value;
    let playerTwoCard = playerTwoDeck.cards[i].value;

    if(playerOneCard > playerTwoCard){
        console.log("Player 1 receives a point.")
        playerOnesScore++
    }else if(playerTwoCard > playerOneCard){
        console.log("Player 2 recieves a point.")
        playerTwosScore++
    }else{
        console.log("Tie. No one receives a point.")
    }
}

// Log the final scores to the console:

console.log(playerOnesScore);
console.log(playerTwosScore);

// Declare winner:

if(playerOnesScore > playerTwosScore){
    console.log("Player 1 Wins!")
}else if(playerTwosScore > playerOnesScore){
    console.log("Player 2 Wins!")
}else{
    console.log("It's a tie!")
}
