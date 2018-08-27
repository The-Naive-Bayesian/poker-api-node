import {Deck} from "./src/Deck";
import {Player} from "./src/Player";
import {SharedCards} from "./src/SharedCards";

const deck = new Deck();
const sharedCards = new SharedCards();
const player1 = new Player();
const player2 = new Player();

// Run a mock game
// Preflop
player1.getHoleCards(deck);
player2.getHoleCards(deck);

console.log(`Player 1: ${player1.holeCards}`);
console.log(`Player 2: ${player2.holeCards}`);

// Flop
sharedCards.drawFlop(deck);

console.log(sharedCards.cards);

// Turn
sharedCards.drawTurn(deck);

console.log(sharedCards.cards);

// River
sharedCards.drawRiver(deck);

console.log(sharedCards.cards);
