import {Player} from "./Player";

test('new players have no hole cards', () => {
    const player = new Player();
    expect(player.holeCards.length).toBe(0);
});

test('getHolecards provides player 2 cards', () => {
    const mockDeck = {
        drawRandom: () => 'Ah'
    };
    const player = new Player();
    player.getHoleCards(mockDeck);
    expect(player.holeCards).toEqual(['Ah','Ah']);
});
