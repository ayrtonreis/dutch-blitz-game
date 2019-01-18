const pileTypes = {
    DUTCH_PILE: 'DUTCH_PILE',
    WOOD_PILE: 'WOOD_PILE',
    POST_PILE: 'POST_PILE',
    BLITZ_PILE: 'BLITZ_PILE'
};

const validPileTypesToRemoveFrom = [
    pileTypes.WOOD_PILE,
    pileTypes.POST_PILE,
    pileTypes.BLITZ_PILE
];

export const testingAction = (playerId) =>({
    type: 'TESTING_FUNCTION',
    playerId

});

export const moveCardToDutchPile = (card, origin, position) => ({
    type: 'MOVE_CARD_TO_DUTCH_PILE',
    card,
    origin,
    position
});

// Move 3 cardsReducer from hand to Wood Pile
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

export const selectCard = (card, playerId, pileType) => ({
    type: 'SELECT_CARD',
    card,
    playerId,
    pileType
});

export const moveCardIfValid = (playerId, pileType) => {
  return (dispatch, getState) => {
      const {

      } = getState();
  };
};

export const selectOriginCardIfValid = (playerId, cardId, pileType) => {
    return(dispatch, getState) => {
        if(cardId === playerId && validPileTypesToRemoveFrom.includes(pileType))
            dispatch(selectCard())

    }
};

export const cardClicked = (playerId, cardId, pileType) => {
    return (dispatch, getState) => {
        const state = getState();

        const playerData = state[`player${playerId}Data`];

        if(playerData.origin === null)
            dispatch(selectOriginCardIfValid(playerId, cardId, pileType));
        else
            dispatch(moveCardIfValid(playerId, cardId, pileType));

    };
};