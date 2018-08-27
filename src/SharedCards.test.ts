import {SharedCards} from "./SharedCards";

test('new SharedCards have no cards', () => {
    const shared = new SharedCards();
    expect(shared.cards.length).toBe(0);
});

test('drawFlop adds 3 cards', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    shared.drawFlop(mockDeck);
    expect(shared.cards).toEqual(['Ah','Ah','Ah']);
});

test('drawTurn adds 1 cards', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    shared.drawTurn(mockDeck);
    expect(shared.cards).toEqual(['Ah']);
});

test('drawRiver adds 1 cards', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    shared.drawRiver(mockDeck);
    expect(shared.cards).toEqual(['Ah']);
});

test('drawFlop twice adds 6 cards', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    shared.drawFlop(mockDeck);
    shared.drawFlop(mockDeck);
    expect(shared.cards).toEqual(['Ah','Ah','Ah','Ah','Ah','Ah']);
});

test('drawTurn twice adds 2 cards', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    shared.drawTurn(mockDeck);
    shared.drawTurn(mockDeck);
    expect(shared.cards).toEqual(['Ah','Ah']);
});

test('drawRiver adds 2 cards', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    shared.drawRiver(mockDeck);
    shared.drawRiver(mockDeck);
    expect(shared.cards).toEqual(['Ah','Ah']);
});

test('drawFlop returns 3 cards', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    expect(shared.drawFlop(mockDeck)).toEqual(['Ah','Ah','Ah']);
});

test('drawTurn returns 1 card', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    expect(shared.drawTurn(mockDeck)).toEqual(['Ah']);
});

test('drawRiver returns 1 card', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const shared = new SharedCards();
    expect(shared.drawRiver(mockDeck)).toEqual(['Ah']);
});

