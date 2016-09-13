import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class GameCell extends Component {
  render() {
    return (
      <td className={css(styles.cell)}>{this.props.cell}</td>
    );
  }
}

export default GameCell;

const styles = StyleSheet.create({
  cell: {
    backgroundColor: '#fff',
    textAlign: 'center'
  }
});
