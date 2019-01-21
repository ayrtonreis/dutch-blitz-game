import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'
import pileTypes from "../pileTypes";
import {cardClicked} from "../redux/cards/action";
import {connect} from "react-redux";
import {emptyCardObj} from "../utils";

const styles = theme => ({
    woodPile: {

    },
});

let WoodPile = ({classes, cardOwnerId, card}) => {
    return(
        <div className={classes.woodPile}>
            <Card
                cardOwnerId={cardOwnerId}
                pileType={pileTypes.WOOD_PILE}
                color={card.color}
                gender={card.gender}
                number={card.number}
            />
        </div>
    );
};

WoodPile = withStyles(styles)(WoodPile);

function mapStateToProps(state, {cardOwnerId}){
    const playerData = state.cards[`player${cardOwnerId}Data`];

    // get the last card from the wood pile
    // in case there is no card, then fill it with emptyCardObj
    const card = playerData[pileTypes.WOOD_PILE].slice(-1)[0] || emptyCardObj;

    return {
        card
    }
}

WoodPile = connect(mapStateToProps)(WoodPile);

export default WoodPile;