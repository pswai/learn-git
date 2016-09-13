import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Terminal extends Component {
  render() {
    return (
      <div className={css(styles.terminal)}>Terminal</div>
    );
  }
}

export default Terminal;

const styles = StyleSheet.create({
  terminal: {
    height: '100%',
    width: '100%',
    fontFamily: 'Menlo, Consolas, San-Serif',
    fontSize: '11px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '10px'
  }
});
