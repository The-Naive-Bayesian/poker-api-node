export class Deck {
    public cards: string[] = [];
    private suits: string[] = ['c', 'd', 'h', 's'];
    private values: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A',];

    constructor() {
        // Construct deck of cards
        this.suits.forEach(suit => {
            this.values.forEach(value => {
                let card = `${value}${suit}`;
                this.cards.push(card);
            });
        });
    }

    draw(index?: number): string {
        // Return card at index or top card in deck
        index = index || this.cards.length - 1;
        const cards: string[] = this.cards.splice(index, 1);
        return cards[0];
    }

    drawRandom(): string {
        const rand = Math.random();
        const randDeckIndex = Math.floor(rand * this.cards.length);
        return this.draw(randDeckIndex);
    }

}