import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Options from './Options'
import Field from './Field'

const styles = {
    game: {
        display: 'grid',
        gridGap: '4px',
        padding: '10px',
        gridTemplateColumns: '100px 600px'
    },
};

const Game = ({classes}) => {
  return(
      <div className={classes.game}>
          <Options/>

          <Field/>
      </div>
  );
};

export default withStyles(styles)(Game);