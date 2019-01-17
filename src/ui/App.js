import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    gameContainer: {
        display: 'grid',
        gridGap: '4px',
        padding: '10px',
        gridTemplateColumns: '100px 800px'
    },
    optionsPanel: {
        backgroundColor: '#b8e9ff',
        padding: '10px',
    },
    field: {
        backgroundColor: '#ffdb96',
        display: 'grid',
        padding: '10px',
        gridTemplateColumns: '350px 350px',
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
    colorful: {
        color: '#ff0000'
    }
};

class App extends Component {

  render() {
        const styleClass = this.props.classes;

        return (
          <div className="App">

            <div className={styleClass.gameContainer}>
                <div className={styleClass.optionsPanel}>

                </div>

                <div className={styleClass.field}>
                    <div className={styleClass.player}>a</div>
                    <div className={styleClass.player}>b</div>

                    <div className={styleClass.dutchSpace}>c</div>

                    <div className={styleClass.player}>d</div>
                    <div className={styleClass.player}>e</div>
                </div>
            </div>


          </div>
        );
      }
}

App = withStyles(styles)(App);

export default App;
