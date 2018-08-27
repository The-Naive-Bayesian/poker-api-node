import {Deck} from "./Deck";

export class Player {
    public holeCards: string[] = [];

    getHoleCards(deck: Deck) {
        this.holeCards.push(deck.drawRandom());
        this.holeCards.push(deck.drawRandom());
    }
}