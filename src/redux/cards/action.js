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

export const selectCard = (card) => ({
    type: 'SELECT_CARD',
    card
});

export const moveCardIfValid = (playerId, pileType) => {
  return (dispatch, getState) => {
      const {

      } = getState();
  };
};

export const selectOriginCardIfValid = (playerId, pileType) => {
    return(dispatch, getState) => {

    }
};

export const cardClicked = (playerId, pileType) => {
    return (dispatch, getState) => {
        const state = getState();

        const playerData = state[`player${playerId}Data`];

        if(playerData.origin === null)
            dispatch(selectOriginCardIfValid(playerId, pileType));
        else
            dispatch(moveCardIfValid(playerId, pileType));


    };
};