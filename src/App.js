import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import GameBoard from './GameBoard';
import CommandList from './CommandList';
import Terminal from './Terminal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.topRow)}>
          <div className={css(styles.boardColumn)}>
            <GameBoard/>
          </div>
          <div className={css(styles.commandListColumn)}>
            <CommandList/>
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
    justifyContent: 'flex-start'
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
    padding: '5px'
  },

  commandListColumn: {
    flexGrow: 1,
    padding: '5px'
  },

  terminalContainer: {
    flexGrow: 1
  }
});
