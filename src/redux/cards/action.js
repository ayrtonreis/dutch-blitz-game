import pileTypes from '../../pileTypes'
import {generateCardsArray, shuffleArray, colors} from '../../utils'

const validPileTypesToRemoveFrom = [
    pileTypes.WOOD_PILE,
    pileTypes.LEFT_POST_PILE,
    pileTypes.MIDDLE_POST_PILE,
    pileTypes.RIGHT_POST_PILE,
    pileTypes.BLITZ_PILE
];

export const actionList = {
    SELECT_CARD: 'SELECT_CARD',
    MOVE_CARD_TO_DUTCH_PILE: 'MOVE_CARD_TO_DUTCH_PILE',
    MOVE_CARD_TO_POST_PILE: 'MOVE_CARD_TO_POST_PILE',
    MOVE_CARD_TO_WOOD_PILE: 'MOVE_CARD_TO_WOOD_PILE',
    DEAL_CARDS: 'DEAL_CARDS',
    NOOP: 'NOOP',
};

export const testingAction = (cardOwnerId) =>({
    type: 'TESTING_FUNCTION',
    cardOwnerId

});

export const noop = () => ({
    type: 'NOOP',
});

export const moveCardToDutchPile = (playerId, dutchPileIndex) => ({
    type: actionList.MOVE_CARD_TO_DUTCH_PILE,
    playerId,
    dutchPileIndex
});

// Move 3 cards from hand to Wood Pile
export const moveCardToWoodPile = (playerId) => ({
    type: actionList.MOVE_CARD_TO_WOOD_PILE,
    playerId
});

export const moveCardToPostPile = (playerId, postPileIndex) => ({
    type: actionList.MOVE_CARD_TO_POST_PILE,
    playerId,
    postPileIndex
});

export const selectCard = (playerId, pileType) => ({
    type: actionList.SELECT_CARD,
    playerId,
    pileType
});

export const dealCards = (decks) => ({
    type: actionList.DEAL_CARDS,
    decks
});

export const moveCardIfValid = (playerId, cardOwnerId, pileType, pileIndex) => {
  return (dispatch, getState) => {
      const { cards } = getState();
      const {[`player${playerId}Data`]: playerData} = cards;

      if(playerId === cardOwnerId && pileType !== pileTypes.DUTCH_PILE){
          switch(pileType){
              case pileTypes.WOOD_PILE:

                  break;
              case pileTypes.LEFT_POST_PILE:

                  break;
              case pileTypes.MIDDLE_POST_PILE:

                  break;
              case pileTypes.RIGHT_POST_PILE:

                  break;
              default:
                  dispatch(noop());
          }
      }
      else if(pileType === pileTypes.DUTCH_PILE){
          dispatch(moveCardToDutchPile(playerId, pileIndex));
      }
      else{
          dispatch(noop());
      }
  };
};

export const selectOriginCardIfValid = (playerId, cardOwnerId, pileType) => {
    return(dispatch) => {
        if(playerId === cardOwnerId && validPileTypesToRemoveFrom.includes(pileType))
            dispatch(selectCard(playerId, pileType));
        else
            dispatch(noop());
    }
};

export const cardClicked = (cardOwnerId, pileType, pileIndex) => {
    console.log("inside cardCliked thunk");

    return (dispatch, getState) =>{
        const { currentPlayerId, cards } = getState();
        const prevSelectedCard = cards[`player${currentPlayerId}Data`].selectedCardOrigin;

        // If the player is selecting the origin of the play movement
        if(prevSelectedCard === null){
            dispatch(selectOriginCardIfValid(currentPlayerId, cardOwnerId, pileType));
        }
        else{
            dispatch(moveCardIfValid(currentPlayerId, cardOwnerId, pileType, pileIndex));
        }
    };

    // return (dispatch, getState) => {
    //     const state = getState();
    //
    //     const playerData = state[`player${playerId}Data`];
    //
    //     if(playerData.origin === null)
    //         dispatch(selectOriginCardIfValid(playerId, cardId, pileType));
    //     else
    //         dispatch(moveCardIfValid(playerId, cardId, pileType));
    //
    // };
};

export const shuffleAndDealCards = () => {
    console.log("inside dealCards thunk");

    const decks = shuffleArray([
        shuffleArray(generateCardsArray(colors.red)),
        shuffleArray(generateCardsArray(colors.blue)),
        shuffleArray(generateCardsArray(colors.green)),
        shuffleArray(generateCardsArray(colors.yellow)),
    ]);

    return (dispatch) => {
        dispatch(dealCards(decks));
    }
};