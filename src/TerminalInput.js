import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class TerminalInput extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    // Handle Enter
    if (e.which === 13 && !!e.target.value) {
      this.props.onSubmit(e.target.value);

      e.target.value = '';
    }
  }

  render() {
    const {command, isExecuted} = this.props;
    const inputProps = {};

    if (command) {
      inputProps.value = command;
      inputProps.readOnly = 'readOnly';
    }
    if (isExecuted) {
      inputProps.readOnly = 'readOnly';
      inputProps.disabled = 'disabled';
    }

    return (
      <div className={css(styles.terminalInput)}>
        <div className={css(styles.inputIndicator)}>$</div>
        <input
          {...inputProps}
          type="text"
          className={css(styles.input, !isExecuted && styles.activeInput)}
          placeholder="Input your shell command here"
          onKeyPress={this.handleKeyPress}
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

  activeInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
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
