export const moveCardToDutchPile = (card, origin, position) => ({
    type: 'MOVE_CARD_TO_DUTCH_PILE',
    card,
    origin,
    position
});

// Move 3 cards from hand to Wood Pile
export const moveCardToWoodPile = (card, origin) => ({
    type: 'MOVE_CARD_TO_WOOD_PILE',
    card,
    origin
});

export const moveCardToPostPile = (card, origin) => ({
    type: 'MOVE_CARD_TO_POST_PILE',
    card,
    origin
});