import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import WoodPile from './WoodPile'
import PostPile from './PostPile'
//import BlitzPile from './BlitzPile'

const styles = {
    player: {
        backgroundColor: '#ffaba1',
        margin: '8px',
        minHeight: '50px'
    },

    header: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },

    space: {
        display: 'grid',
        gridGap: '2px',
        padding: '8px',
        gridTemplateColumns: 'repeat(5, 1fr)'
    },
    card: {
        backgroundColor: 'red'
    }
};

let PlayerHeader = ({name = 'Player Name', classes}) => {
    return (
        <div className={classes.header}>
            {name}
        </div>
    );
};
PlayerHeader = withStyles(styles)(PlayerHeader);

let PlayerSpace = ({classes}) => {
    return (
        <div className={classes.space}>
            <WoodPile/>
            <PostPile/>
            <WoodPile/>
        </div>
    );
};
PlayerSpace = withStyles(styles)(PlayerSpace);


const Player = ({classes}) => {
    return(
        <div className={classes.player}>
            <PlayerHeader/>
            <PlayerSpace/>
        </div>
    );
};

export default withStyles(styles)(Player);