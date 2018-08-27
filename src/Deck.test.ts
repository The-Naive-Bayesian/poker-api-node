import {Deck} from "./Deck";

test('new decks have 52 cards', () => {
    const deck = new Deck();
    expect(deck.cards.length).toBe(52);
});

test('draw method returns a card', () => {
    const deck = new Deck();
    const card = deck.draw();
    expect(card).toBeTruthy();
});

test('draw method removes a card from the deck', () => {
    const deck = new Deck();
    const card = deck.draw();
    expect(deck.cards.length).toBe(51);
});

test('draw method removes a card from the deck at specified index', () => {
    const deck = new Deck();
    const fourthCard = deck.cards[3];
    const card = deck.draw(3);
    expect(card).toEqual(fourthCard);
});
