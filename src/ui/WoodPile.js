import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'

const styles = theme => ({
    woodPile: {

    },
});

const WoodPile = ({classes, id}) => {
    return(
        <div className={classes.woodPile}>
            <Card id={id} color='blue'/>
        </div>
    );
};

export default withStyles(styles)(WoodPile);