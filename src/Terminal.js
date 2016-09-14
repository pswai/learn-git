import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';
import TerminalInput from './TerminalInput';
import TerminalOutput from './TerminalOutput';

class Terminal extends Component {
  constructor(props) {
    super(props);

    this.activeInput = null;

    this.renderPreviousInputs = this.renderPreviousInputs.bind(this);
  }

  componentDidUpdate() {
    if (this.activeInput) {
      const node = ReactDOM.findDOMNode(this.activeInput);
      if (node) {
        node.scrollIntoView();
      }
    }
  }

  renderPreviousInputs() {
    const {commands} = this.props;

    return commands.map((command, i) => {
      return (
        <div key={i}>
          <TerminalInput command={command.value} isExecuted={command.isExecuted}/>
          {!!command.stdout ? <TerminalOutput text={command.stdout}/> : null}
          {!!command.stderr ? <TerminalOutput text={command.stderr}/> : null}
        </div>
      );
    });
  }

  render() {
    return (
      <div className={css(styles.terminal)}>
        {this.renderPreviousInputs()}
        <TerminalInput ref={ref => this.activeInput = ref} onSubmit={this.props.executeShell}/>
      </div>
    );
  }
}

export default Terminal;

const styles = StyleSheet.create({
  terminal: {
    height: '100%',
    width: '100%',
    fontFamily: 'Menlo, Consolas, San-Serif',
    fontSize: '12px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '10px',
    overflow: 'auto'
  }
});
