import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

class CommandList extends Component {
  constructor(props) {
    super(props);

    this.lastCommand = null;

    this.addCommand = this.addCommand.bind(this);
    this.deleteCommand = this.deleteCommand.bind(this);
    this.renderCommandItems = this.renderCommandItems.bind(this);

    this.goLeft = () => this.addCommand('left');
    this.goRight = () => this.addCommand('right');
    this.goUp = () => this.addCommand('up');
    this.goDown = () => this.addCommand('down');
  }

  componentDidUpdate() {
    if (this.lastCommand) {
      const node = ReactDOM.findDOMNode(this.lastCommand);
      if (node) {
        node.scrollIntoView();
      }
    }
  }

  addCommand(command) {
    let newList = this.props.commands.slice();
    newList.push(command);

    this.props.onChange(newList);
  }

  deleteCommand(index) {
    let newList = this.props.commands.slice();
    newList.splice(index, 1);

    this.props.onChange(newList);
  }

  renderCommandItems(commands) {
    return commands.map((command, i) => {
      let moreProps = {};
      if (i === commands.length - 1) {
        moreProps.ref = ref => this.lastCommand = ref;
      }

      return (
        <li key={i} className={css(styles.item)} {...moreProps}>
          <span>{command};</span>
          <span className={css(styles.deleteButton)} onClick={() => this.deleteCommand(i)}>×</span>
        </li>
      );
    });
  }

  render() {
    const {commands} = this.props;

    return (
      <div className={css(styles.commandList)}>
        <ul className={css(styles.list)}>
          {this.renderCommandItems(commands)}
        </ul>

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

  list: {
    listStyle: 'none',
    fontSize: '11px',
    fontFamily: 'Menlo, Consolas, San-Serif',
    height: 'calc(100% - 30px)',
    width: '100%',
    padding: '5px',
    margin: 0,
    backgroundColor: '#fff',
    overflow: 'auto'
  },

  item: {
    ':hover': {
      backgroundColor: '#f5f5f5'
    }
  },

  deleteButton: {
    float: 'right',
    borderRadius: '15px',
    padding: '0 3px',
    color: 'red',
    fontWeight: 'bold',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: 'red',
      color: '#fff'
    }
  },

  inputArea: {
    height: '30px'
  }
});
