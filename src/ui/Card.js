import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames'

const styles = theme => ({
    card: {
        height: '60px',
        width: '100%'
    },
    cardRed: {
        backgroundColor: '#ff5451',
    },
    cardGreen: {
        backgroundColor: '#3e913d',
    },
    cardBlue: {
        backgroundColor: '#326ca3',
    },
    cardEmpty:{
        backgroundColor: '#575757',
    },
    gender: {
        textAlign: 'center',
    },
    number: {
        textAlign: 'center',
        fontSize: '22px',
        color: 'white'
    }
});

const Card = ({
              color,
              gender = 'N',
              number = '0',
              classes,
              onClick,
    }) => {

    const mapClasses = {
        red: classes.cardRed,
        green: classes.cardGreen,
        blue: classes.cardBlue,
        empty: classes.cardEmpty,
    };

    const classColor = mapClasses[color] ? mapClasses[color] : mapClasses['empty'];

    return(
        <button onClick={onClick} className={classNames(classes.card, classColor)}>
            <div className={classes.gender}>{gender}</div>
            <div className={classes.number}>{number}</div>
        </button>
    );
};

export default withStyles(styles)(Card);