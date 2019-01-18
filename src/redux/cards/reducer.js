import { combineReducers } from 'redux'

function addToDutchPile(piles, card, position){
    const newPiles = [...piles];
    newPiles[position] = card;

    // return new dutch piles
    return newPiles;
}

function addToWoodPile(pile, cards){
    // return new wood pile
    return [...piles, ...cards]
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

function cards(state, action){
    /*
        state is of the form:
        {
            dutchPile: {}
            playerData: {}
        }
     */

    switch(action.type) {
        case 'ADD_CARD_TO_DUTCH_PILE':
            const dutchPile = state.dutchPile;
            const playerData = state.playerData;
            const pos = action.position;
            const currentCard = dutchPile[];
            const playedCard = action.card;

            try{
                if( currentCard.color === playedCard.color &&
                    playedCard.number - currentCard.number === 1){
                        const newDutchPile = [...dutchPile];
                        newDutchPile[pos] = playedCard;

                        const newPlayerData =  {
                                                    ...playerData,


                                                };

                        return {newDutchPile, newPlayerData};
                }
            }
            catch(err){}

        default:
            return state;
    }
}

function cards(state, action){
    /*
        state is of the form:
        {
            dutchPile: {}
            playerData: {}
        }
     */

    switch(action.type){
        case 'MOVE_CARD_TO_DUTCH_PILE':
            const dutchPile = state.dutchPile;
            const playerData = state.playerData;
            const pos = action.position;
            const origin = action.origin;
    }
}

export default cards;