import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'

const styles = theme => ({
    woodPile: {

    },
});

const WoodPile = ({classes}) => {
    return(
        <div className={classes.woodPile}>
            <Card  color='blue'/>
        </div>
    );
};

export default withStyles(styles)(WoodPile);