import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'
import pileTypes from "../pileTypes";

const styles = theme => ({
    dutchPile: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: '60px'
    },
});

//pileType={pileTypes.DUTCH_PILE}
const DutchPile = ({classes, card, pileIndex}) => {
    return(
        <div className={classes.dutchPile}>
            <Card pileType={pileTypes.DUTCH_PILE} pileIndex={pileIndex}/>
        </div>
    );
};

export default withStyles(styles)(DutchPile);