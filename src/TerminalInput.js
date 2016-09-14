import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class TerminalInput extends Component {
  render() {
    const {command, isExecuted} = this.props;
    const inputProps = {};

    if (command) {
      inputProps.value = command;
    }
    if (isExecuted) {
      inputProps.disabled = 'disabled';
    }

    return (
      <div className={css(styles.terminalInput)}>
        <div className={css(styles.inputIndicator)}>$</div>
        <input
          type="text"
          className={css(styles.input)}
          placeholder="Input your command here"
          {...inputProps}
        />
      </div>
    );
  }
}

export default TerminalInput;

const styles = StyleSheet.create({
  terminalInput: {
    display: 'flex'
  },

  inputIndicator: {
    paddingRight: '5px'
  },

  input: {
    display: 'block',
    width: '100%',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    border: 0,
    padding: 0,
    outline: 0
  }
});
