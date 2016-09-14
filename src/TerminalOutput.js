import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class TerminalOutput extends Component {
  render() {
    return (
      <div className={css(styles.terminalOutput)}>
        <pre className={css(styles.text)}>{this.props.text}</pre>
      </div>
    );
  }
}

export default TerminalOutput;

const styles = StyleSheet.create({
  terminalOutput: {
  },

  text: {
    fontFamily: 'inherit'
  }
});
