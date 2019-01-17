import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const Options = ({classes}) => {
    return(
        <div className={classes.options}>
            <Button variant="contained" className={classes.button}>
                Reset
            </Button>
            <Button variant="contained" className={classes.button}>
                Deal Cards
            </Button>
            <Button variant="contained" className={classes.button}>
                Play/Pause
            </Button>
        </div>
    );
};

export default withStyles(styles)(Options);