import {Deck} from "./Deck";

export class SharedCards {
    public cards: string[] = [];

    public drawFlop(deck: Deck): string[] {
        return this.drawCards(deck, 3);
    }

    public drawTurn(deck: Deck): string[] {
        return this.drawCards(deck, 1);
    }

    public drawRiver(deck: Deck): string[] {
        return this.drawCards(deck, 1);
    }

    private drawCards(deck: Deck, numberCards = 1): string[] {
        const cardsDrawn: string[] = [];
        for (let i=0; i<numberCards; i++) {
            let card = deck.drawRandom()
            this.cards.push(card);
            cardsDrawn.push(card);
        }
        return cardsDrawn;
    }
}