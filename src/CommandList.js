import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class CommandList extends Component {
  constructor(props) {
    super(props);

    this.addCommand = this.addCommand.bind(this);
    this.onManualChange = this.onManualChange.bind(this);

    this.goLeft = () => this.addCommand('left');
    this.goRight = () => this.addCommand('right');
    this.goUp = () => this.addCommand('up');
    this.goDown = () => this.addCommand('down');
  }

  addCommand(command) {
    let newList = this.props.commands.slice();
    newList.push(command);

    this.props.onChange(newList);
  };

  onManualChange(e) {
    let source = e.target.value;

    if (source.slice(-1) === ';') {
      let newList = source.slice(0, -1).split(';').map(command => command.trim());
      this.props.onChange(newList);
    }
  }

  render() {
    const {commands} = this.props;
    let value = commands.join(';\n');
    if (value) {
      value += ';';
    }

    return (
      <div className={css(styles.commandList)}>
        <textarea
          className={css(styles.textarea)}
          onChange={this.onManualChange}
          defaultValue={value}
        />

        <div className={css(styles.inputArea)}>
          <button type="button" onClick={this.goLeft}>←</button>
          <button type="button" onClick={this.goRight}>→</button>
          <button type="button" onClick={this.goUp}>↑</button>
          <button type="button" onClick={this.goDown}>↓</button>
        </div>
      </div>
    );
  }
}

export default CommandList;

const styles = StyleSheet.create({
  commandList: {
    width: '100%',
    height: '100%'
  },

  textarea: {
    resize: 'none',
    fontSize: '11px',
    fontFamily: 'Menlo, Consolas, San-Serif',
    height: 'calc(100% - 30px)',
    width: '100%',
    border: 0,
    padding: '5px'
  },

  inputArea: {
    height: '30px'
  }
});
