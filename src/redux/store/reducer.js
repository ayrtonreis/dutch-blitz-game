import cardsReducer from '../cards/reducer'
import {playingReducer} from '../playing'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    cards: cardsReducer,
    playing: playingReducer,
});

export default rootReducer;