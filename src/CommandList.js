import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class CommandList extends Component {
  render() {
    return (
      <textarea
        className={css(styles.textarea)}
        readOnly="readOnly"
        defaultValue="test"
      />
    );
  }
}

export default CommandList;

const styles = StyleSheet.create({
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none'
  }
});
