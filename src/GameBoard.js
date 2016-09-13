import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class GameBoard extends Component {
  render() {
    return (
      <div className={css(styles.gameBoard)}>gameboard</div>
    );
  }
}

export default GameBoard;

const styles = StyleSheet.create({
  gameBoard: {
    height: '100%',
    width: '100%',
    border: '1px solid #bfbfbf'
  }
});
