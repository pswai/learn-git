import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import GameCell from './GameCell';

const GAME_MAP = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 'WIN'],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ['Start', 1, 2, 3, 4, 5, 6, 7, 8, 9]
];

const isCellOpened = GAME_MAP.map(row => row.map(() => false));
isCellOpened[GAME_MAP.length - 1][0] = true;
isCellOpened[0][GAME_MAP[0].length - 1] = true;

class GameBoard extends Component {
  renderGameCells(gameMap) {
    return gameMap.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <GameCell
              cell={cell}
              isOpened={isCellOpened[rowIndex][cellIndex]}
              key={cellIndex}
            />
          ))}
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
    borderSpacing: '5px',
    tableLayout: 'fixed'
  }
});
