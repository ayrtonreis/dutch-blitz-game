import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Card from './Card'

const styles = theme => ({
    postPile: {
        gridColumn: '2/5',
        display: 'grid',
        gridGap: '2px',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
});

const WoodPile = ({classes}) => {
    return(
        <div className={classes.postPile}>
            <Card  color='red'/>
            <Card  color='blue'/>
            <Card  color='green'/>
        </div>
    );
};

export default withStyles(styles)(WoodPile);