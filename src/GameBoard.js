import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import GameCell from './GameCell';

const GAME_MAP = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];

class GameBoard extends Component {
  renderGameCells(gameMap) {
    return gameMap.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((cell, i) => <GameCell cell={cell} key={i}/>)}
        </tr>
      );
    });
  }

  render() {
    return (
      <table className={css(styles.gameBoard)}>
        <tbody>
          {this.renderGameCells(GAME_MAP)}
        </tbody>
      </table>
    );
  }
}

export default GameBoard;

const styles = StyleSheet.create({
  gameBoard: {
    height: '100%',
    width: '100%',
    borderSpacing: '5px'
  }
});
