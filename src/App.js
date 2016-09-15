import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import GameBoard from './GameBoard';
import CommandList from './CommandList';
import Terminal from './Terminal';
import * as api from './lib/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCommand = this.updateCommand.bind(this);
    this.executeShell = this.executeShell.bind(this);
    this.loadList = this.loadList.bind(this);
    this.saveList = this.saveList.bind(this);
    this.updateCommandAndSave = commands => {
      api.save(commands);
      return this.updateCommand(commands);
    };

    this.state = {
      commands: [],
      terminalCommands: []
    };
  }

  componentDidMount() {
    this.loadList();
  }

  loadList() {
    api
      .load()
      .then((commands) => this.updateCommand(commands));
  }

  saveList(commands) {
    api.save(commands);
  }

  updateCommand(commands) {
    let newState = Object.assign({}, this.state, {
      commands: commands
    });

    this.setState(newState);
  }

  executeShell(command) {
    api
      .executeShell(command)
      .then(({stdout, stderr}) => {
        let newTerminalCommands = this.state.terminalCommands.slice();
        newTerminalCommands.push({
          value: command,
          isExecuted: true,
          stdout,
          stderr
        });

        let newState = Object.assign({}, this.state, {
          terminalCommands: newTerminalCommands
        });

        this.setState(newState);
      }, () => {
        let newTerminalCommands = this.state.terminalCommands.slice();
        newTerminalCommands.push({
          value: command,
          isExecuted: true,
          stdout: '',
          stderr: 'Failed to execute command'
        });

        let newState = Object.assign({}, this.state, {
          terminalCommands: newTerminalCommands
        });

        this.setState(newState);
      });
  }

  render() {
    const {commands, terminalCommands} = this.state;

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.topRow)}>
          <div className={css(styles.boardColumn)}>
            <GameBoard commands={commands}/>
          </div>
          <div className={css(styles.commandListColumn)}>
            <CommandList
              commands={commands}
              onChange={this.updateCommandAndSave}
              onLoadList={this.loadList}
              onSaveList={this.saveList}
            />
          </div>
        </div>

        <div className={css(styles.bottomRow)}>
          <div className={css(styles.terminalContainer)}>
            <Terminal commands={terminalCommands} executeShell={this.executeShell}/>
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
    flexGrow: 2,
    flexBasis: 0
  },

  bottomRow: {
    display: 'flex',
    flexGrow: 1,
    padding: '5px',
    flexBasis: 0
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
