import React from 'react'
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames'
import {testingAction} from '../redux/cards/action'

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

let Card = ({
                color,
                gender = 'N',
                number = '0',
                classes,
                onClick,
                playerId,
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

Card = withStyles(styles)(Card);

function mapStateToProps(state, ownProps){
    return {};
}

function mapDispatchToProps(dispatch, ownProps){

    return{
        onClick: () => {console.log(ownProps); dispatch(testingAction(ownProps.playerId))}
    }
}

Card = connect(mapStateToProps, mapDispatchToProps)(Card);

export default Card;