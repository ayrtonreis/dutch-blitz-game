import cards from '../cards/reducer'
import playing from '../playing/reducer'

const initialState = {
    dutchPiles: [],

    playing: true,

    player1Data: {
        nbCardsInDutchPiles: 0,

        blitzPile: [],

        leftPostPile: [],

        middlePostPile: [],

        rightPostPile: [],

        woodPile: [],

        hand: [],

        origin
    },

    player2Data: {
        nbCardsInDutchPiles: 0,

        blitzPile: [],

        leftPostPile: [],

        middlePostPile: [],

        rightPostPile: [],

        woodPile: [],

        hand: []
    },

    player3Data: {
        nbCardsInDutchPiles: 0,

        blitzPile: [],

        leftPostPile: [],

        middlePostPile: [],

        rightPostPile: [],

        woodPile: [],

        hand: []
    },

    player4Data: {
        nbCardsInDutchPiles: 0,

        blitzPile: [],

        leftPostPile: [],

        middlePostPile: [],

        rightPostPile: [],

        woodPile: [],

        hand: []
    }
};

const rootReducer = () => {

};

export default rootReducer;