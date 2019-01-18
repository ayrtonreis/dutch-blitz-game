import React from 'react'
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {togglePlayPause} from "../redux/playing";

const styles = theme => ({
    options: {
        backgroundColor: '#afafaf',
        padding: '10px',
    },
    button: {
        margin: '10px 8px',
        fontSize: '10px',
        width: '70px'
    },
});

let Options = ({classes, playing, playPauseCallback}) => {
    return(
        <div className={classes.options}>
            <Button variant="contained" className={classes.button}>
                Reset
            </Button>
            <Button variant="contained" className={classes.button}>
                Deal Cards
            </Button>
            <Button
                variant="contained"
                className={classes.button}
                onClick={playPauseCallback}
            >
                {playing
                    ? "Pause"
                    : "Play"
                }
            </Button>
        </div>
    );
};

Options = withStyles(styles)(Options);

function mapStateToProps(state) {
    return {
        playing: state.playing,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        playPauseCallback: () => dispatch(togglePlayPause()),
    }
}

Options = connect(mapStateToProps, mapDispatchToProps)(Options);

export default Options