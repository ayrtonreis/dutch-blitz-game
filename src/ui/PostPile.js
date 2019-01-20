import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'
import pileTypes from "../pileTypes";
import {connect} from "react-redux";
import {emptyCardObj} from '../utils'

const styles = theme => ({
    postPile: {
        gridColumn: '2/5',
        display: 'grid',
        gridGap: '2px',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
});

let PostPile = ({
                    classes,
                    cardOwnerId,
                    left,
                    middle,
                    right
    }) => {

    return(
        <div className={classes.postPile}>
            <Card  cardOwnerId={cardOwnerId}
                   pileType={pileTypes.LEFT_POST_PILE}
                   color={left.color}
                   gender={left.gender}
                   number={left.number}
            />
            <Card  cardOwnerId={cardOwnerId}
                   pileType={pileTypes.MIDDLE_POST_PILE}
                   color={middle.color}
                   gender={middle.gender}
                   number={middle.number}
            />
            <Card  cardOwnerId={cardOwnerId}
                   pileType={pileTypes.RIGHT_POST_PILE}
                   color={right.color}
                   gender={right.gender}
                   number={right.number}
            />
        </div>
    );
};

PostPile = withStyles(styles)(PostPile);

function mapStateToProps(state, ownProps) {
    const playerData = state.cards[`player${ownProps.cardOwnerId}Data`];

    // get the last card from each of the post piles
    // in case there is no card, then fill it with emptyCardObj
    const left = playerData[pileTypes.LEFT_POST_PILE].slice(-1)[0] || emptyCardObj;
    const middle = playerData[pileTypes.MIDDLE_POST_PILE].slice(-1)[0] || emptyCardObj;
    const right = playerData[pileTypes.RIGHT_POST_PILE].slice(-1)[0] || emptyCardObj;

    return {
        left,
        middle,
        right,
    }
}

PostPile = connect(mapStateToProps)(PostPile);

export default PostPile;