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

const WoodPile = ({classes, id}) => {
    return(
        <div className={classes.postPile}>
            <Card  id={id} color='red'/>
            <Card  id={id} color='blue'/>
            <Card  id={id} color='green'/>
        </div>
    );
};

export default withStyles(styles)(WoodPile);