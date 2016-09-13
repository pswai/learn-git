import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class GameCell extends Component {
  render() {
    const {isOpened, cell} = this.props;

    if (isOpened) {
      return (
        <td className={css(styles.cell)}>{cell}</td>
      );
    } else {
      return <td className={css(styles.hiddenCell)}/>;
    }
  }
}

export default GameCell;

const styles = StyleSheet.create({
  cell: {
    backgroundColor: '#fff',
    textAlign: 'center'
  },

  hiddenCell: {
    backgroundColor: '#c0d5e4'
  }
});
