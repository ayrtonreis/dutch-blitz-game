import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Options from './Options'
import Field from './Field'
import Bots from './Bots'
import {selectIsPlaying} from "../redux/playing";
import {connect} from 'react-redux';

const styles = {
    game: {
        display: 'grid',
        gridGap: '4px',
        padding: '10px',
        gridTemplateColumns: '100px 600px'
    },
};

let Game = ({classes, playing}) => {
  return(
      <div className={classes.game}>
          <Options />

          <Field playing={playing} />

          <Bots />
      </div>
  );
};

Game = withStyles(styles)(Game);

function mapStateToProps(state) {
    return {
        playing: selectIsPlaying(state),
    }
}

Game = connect(mapStateToProps)(Game);

export default Game;
