import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'
import pileTypes from "../pileTypes";

const styles = theme => ({
    woodPile: {

    },
});

const WoodPile = ({classes, cardOwnerId}) => {
    return(
        <div className={classes.woodPile}>
            <Card cardOwnerId={cardOwnerId} pileType={pileTypes.WOOD_PILE} color='blue'/>
        </div>
    );
};

export default withStyles(styles)(WoodPile);