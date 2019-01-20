import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'
import pileTypes from '../pileTypes'
import {connect} from "react-redux";
import {emptyCardObj} from '../utils'

const styles = theme => ({
    blitzPile: {

    },
});

let BlitzPile = ({classes, cardOwnerId, card}) => {
    return(
        <div className={classes.blitzPile}>
            <Card cardOwnerId={cardOwnerId}
                  pileType={pileTypes.BLITZ_PILE}
                  color={card.color}
                  gender={card.gender}
                  number={card.number}
            />
        </div>
    );
};

BlitzPile = withStyles(styles)(BlitzPile);

function mapStateToProps(state, ownProps) {
    const playerData = state.cards[`player${ownProps.cardOwnerId}Data`];

    // get the last card from the blitz pile
    // in case there is no card, then fill it with emptyCardObj
    const card = playerData[pileTypes.BLITZ_PILE].slice(-1)[0] || emptyCardObj;

    return {
        card
    }
}

BlitzPile = connect(mapStateToProps)(BlitzPile);

export default BlitzPile;