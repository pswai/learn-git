import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class GameCell extends Component {
  render() {
    const {cell} = this.props;

    if (cell.isOpened) {
      return (
        <td
          className={css(
            styles.cell,
            cell.isActive && styles.activeCell,
            !cell.isValid && styles.invalidCell
          )}
        >{cell.value}</td>
      );
    } else {
      return <td className={css(styles.hiddenCell)}>&nbsp;</td>;
    }
  }
}

export default GameCell;

const styles = StyleSheet.create({
  cell: {
    backgroundColor: '#fff',
    textAlign: 'center'
  },

  activeCell: {
    backgroundColor: '#99ff99'
  },

  invalidCell: {
    backgroundColor: '#ffc7c7'
  },

  hiddenCell: {
    backgroundColor: '#c0d5e4'
  }
});
