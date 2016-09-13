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
const START_ROW = GAME_MAP.length - 1;
const START_COL = 0;
const END_ROW = 0;
const END_COL = GAME_MAP[0].length - 1;

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.buildCellMap = this.buildCellMap.bind(this);
  }

  buildCellMap() {
    let currentRow = START_ROW;
    let currentCol = START_COL;

    // Starting map
    const cellMap = GAME_MAP.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => ({
        value: cell,
        isActive: false,
        isOpened: (
          (rowIndex === START_ROW && cellIndex === START_COL) ||
          (rowIndex === END_ROW && cellIndex === END_COL)
        )
      }));
    });

    // Walk map
    this.props.commands.forEach(command => {
      switch (command) {
        case 'left':
          currentCol--;
          break;

        case 'right':
          currentCol++;
          break;

        case 'up':
          currentRow--;
          break;

        case 'down':
          currentRow++;
          break;
      }

      cellMap[currentRow][currentCol].isOpened = true;
    });

    // Mark current cell
    cellMap[currentRow][currentCol].isActive = true;

    return cellMap;
  }

  renderGameCells(cellMap) {
    return cellMap.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <GameCell
              cell={cell}
              key={cellIndex}
            />
          ))}
        </tr>
      );
    });
  }

  render() {
    const cellMap = this.buildCellMap();

    return (
      <table className={css(styles.gameBoard)}>
        <tbody>
        {this.renderGameCells(cellMap)}
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
