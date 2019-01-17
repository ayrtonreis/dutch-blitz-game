import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'

const styles = theme => ({
    dutchPile: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: '60px'
    },
});

const DutchPile = ({classes}) => {
    return(
        <div className={classes.dutchPile}>

        </div>
    );
};

export default withStyles(styles)(DutchPile);