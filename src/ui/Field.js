import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Player from './Player'
import DutchSpace from './DutchSpace'

const styles = {
    field: {
        backgroundColor: '#ffdb96',
        display: 'grid',
        padding: '10px',
        gridTemplateColumns: '1fr 1fr',
    },
    player: {
        backgroundColor: '#ffaba1',
        margin: '8px',
        minHeight: '50px'
    },
    dutchSpace: {
        backgroundColor: '#ff9578',
        margin: '8px',
        gridColumn: '1/3',
        minHeight: '100px'

    },
};

const Field = ({classes}) => {
    return(
        <div className={classes.field}>
            <Player/>
            <Player/>

            <DutchSpace/>

            <Player/>
            <Player/>
        </div>
    );
};

export default withStyles(styles)(Field);