import { combineReducers } from 'redux'
import pileTypes from '../../pileTypes'
import {actionList} from './action'
import {emptyCardObj} from '../../utils'

function addToDutchPile(piles, card, position){
    const newPiles = [...piles];
    newPiles[position] = card;

    // return new dutch piles
    return newPiles;
}

function addToWoodPile(pile, cards){
    // return new wood pile
    return [...pile, ...cards]
}

function addToPostPile(piles, card, position){
    const newPiles = piles.map((pile, index) => {
        if(index === position)
            return [...pile, card];

        return pile;
    });

    // return new post piles
    return newPiles;
}

function removeFromBlitzPile(pile){
    // return {newBlitzPile, removedCard}
    if(pile.length > 0)
        return ({
            pile: pile.slice(0, -1),
            card: pile[pile.length-1]
        });
    return ({
        pile: pile,
        card: null
    })
}

function removeFromWoodPile(pile){
    // {newWoodPile, card}
    if(pile.length > 0)
        return ({
            pile: pile.slice(0, -1),
            card: pile[pile.length-1]
        });
    return ({
        pile: pile,
        card: null
    })
}

function removeFromPostPile(piles, position){
    let takenCard = null;

    const newPiles = piles.map((pile, index) => {
        if(index === position && piles.length > 0){
            takenCard = pile[pile.length-1];
            return pile.slice(0, -1);
        }
        return pile;
    });

    // {newPostPiles, card}
    return ({
        piles: newPiles,
        card: takenCard
    });
}

function selectCard(playerId, pileType){

}

function noop(state){
    console.log('NO OP');
    return state;
}

const removeFrom = {
    'BLITZ_PILE': removeFromBlitzPile,
    'WOOD_PILE': removeFromWoodPile,
    'POST_PILE': removeFromPostPile,
};

// function cardsReducer(state, action){
//     /*
//         state is of the form:
//         {
//             dutchPile: {}
//             playerData: {}
//         }
//      */
//
//     switch(action.type) {
//         case 'ADD_CARD_TO_DUTCH_PILE':
//             const dutchPile = state.dutchPile;
//             const playerData = state.playerData;
//             const pos = action.position;
//             const currentCard = dutchPile[];
//             const playedCard = action.card;
//
//             try{
//                 if( currentCard.color === playedCard.color &&
//                     playedCard.number - currentCard.number === 1){
//                         const newDutchPile = [...dutchPile];
//                         newDutchPile[pos] = playedCard;
//
//                         const newPlayerData =  {
//                                                     ...playerData,
//
//
//                                                 };
//
//                         return {newDutchPile, newPlayerData};
//                 }
//             }
//             catch(err){}
//
//         default:
//             return state;
//     }
// }

const initialState = {
    dutchPiles: [],

    player1Data: {
        nbCardsInDutchPiles: 0,

        [pileTypes.BLITZ_PILE]: [],

        [pileTypes.LEFT_POST_PILE]: [],

        [pileTypes.MIDDLE_POST_PILE]: [],

        [pileTypes.RIGHT_POST_PILE]: [],

        [pileTypes.WOOD_PILE]: [],

        hand: [],

        selectedCardOrigin: null,
    },

    player2Data: {
        nbCardsInDutchPiles: 0,

        [pileTypes.BLITZ_PILE]: [],

        [pileTypes.LEFT_POST_PILE]: [],

        [pileTypes.MIDDLE_POST_PILE]: [],

        [pileTypes.RIGHT_POST_PILE]: [],

        [pileTypes.WOOD_PILE]: [],

        hand: [],

        selectedCardOrigin: null,
    },

    player3Data: {
        nbCardsInDutchPiles: 0,

        [pileTypes.BLITZ_PILE]: [],

        [pileTypes.LEFT_POST_PILE]: [],

        [pileTypes.MIDDLE_POST_PILE]: [],

        [pileTypes.RIGHT_POST_PILE]: [],

        [pileTypes.WOOD_PILE]: [],

        hand: [],

        selectedCardOrigin: null,
    },

    player4Data: {
        nbCardsInDutchPiles: 0,

        [pileTypes.BLITZ_PILE]: [],

        [pileTypes.LEFT_POST_PILE]: [],

        [pileTypes.MIDDLE_POST_PILE]: [],

        [pileTypes.RIGHT_POST_PILE]: [],

        [pileTypes.WOOD_PILE]: [],

        hand: [],

        selectedCardOrigin: null,
    }
};

function buildPlayerData(deck){

    const postPileArray = deck.slice(0, 3);
    const blitzArray = deck.slice(3, 13);
    const handArray = deck.slice(14);

    return ({
        nbCardsInDutchPiles: 0,

        [pileTypes.BLITZ_PILE]: blitzArray,

        [pileTypes.LEFT_POST_PILE]: [postPileArray[0]],

        [pileTypes.MIDDLE_POST_PILE]: [postPileArray[1]],

        [pileTypes.RIGHT_POST_PILE]: [postPileArray[2]],

        [pileTypes.WOOD_PILE]: [],

        hand: handArray,

        selectedCardOrigin: null,
    });
}

function cardsReducer(state=initialState, action){
    const newState = {...state};

    let playerDataKey, newPlayerData;

    switch(action.type){
        case actionList.DEAL_CARDS:
            console.log('%c DEAL_CARDS! ', 'background: #888; color: #ffffff');

            const playerDataKeys = ['player1Data', 'player2Data', 'player3Data', 'player4Data'];

            playerDataKeys.forEach((playerDataKey, index) => {
                newState[playerDataKey] = buildPlayerData(action.decks[index]);
            });

            console.log(newState);

            return newState;

        case actionList.SELECT_CARD:
            console.log('%c SELECT_CARD! ', 'background: #888; color: #ffffff');
            playerDataKey = `player${action.playerId}Data`;
            newPlayerData = {...newState[playerDataKey]};

            newPlayerData.selectedCardOrigin = action.pileType;
            newState[playerDataKey] = newPlayerData;

            console.log(newState);
            return newState;

        case actionList.MOVE_CARD_TO_DUTCH_PILE:
            console.log('%c MOVE_CARD_TO_DUTCH_PILE! ', 'background: #888; color: #ffffff');

            playerDataKey = `player${action.playerId}Data`;
            newPlayerData = {...newState[playerDataKey]};

            const card = newPlayerData[newPlayerData.selectedCardOrigin].slice(-1)[0];

            newState.dutchPiles = addToDutchPile(state.dutchPiles, card, action.dutchPileIndex);

            console.log(newState);
            return newState;

        case actionList.MOVE_CARD_TO_POST_PILE:

            return newState;

        case actionList.MOVE_CARD_TO_WOOD_PILE:
            console.log('MOVE_CARD_TO_WOOD_PILE');
            return newState;

        default:
            console.log("%c NO OP", "color: #00aa00")
            return state;

    }

    console.log('action', action);
    return newState;

    //return noop(state);
    /*
        state is of the form:
        {
            dutchPile: {}
            playerData: {}
        }
     */

    // switch(action.type){
    //     case 'MOVE_CARD_TO_DUTCH_PILE':
    //         const dutchPile = state.dutchPile;
    //         const playerData = state.playerData;
    //         const pos = action.position;
    //         const origin = action.origin;
    //
    // }
}

export default cardsReducer;