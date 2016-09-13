import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import GameBoard from './GameBoard';
import CommandList from './CommandList';
import Terminal from './Terminal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCommand = this.updateCommand.bind(this);

    this.state = {
      commands: ['right', 'right']
    };
  }

  updateCommand(commands) {
    let newState = Object.assign({}, this.state, {
      commands: commands
    });

    this.setState(newState);
  }

  render() {
    const {commands} = this.state;

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.topRow)}>
          <div className={css(styles.boardColumn)}>
            <GameBoard commands={commands}/>
          </div>
          <div className={css(styles.commandListColumn)}>
            <CommandList commands={commands} onChange={this.updateCommand}/>
          </div>
        </div>

        <div className={css(styles.bottomRow)}>
          <div className={css(styles.terminalContainer)}>
            <Terminal/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  topRow: {
    display: 'flex',
    flexGrow: 2
  },

  bottomRow: {
    display: 'flex',
    flexGrow: 1,
    padding: '5px'
  },

  boardColumn: {
    flexGrow: 3,
    flexBasis: 0,
    padding: '5px'
  },

  commandListColumn: {
    flexGrow: 1,
    flexBasis: 0,
    padding: '5px'
  },

  terminalContainer: {
    flexGrow: 1
  }
});
