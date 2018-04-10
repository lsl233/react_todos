import React, { Component } from 'react';

class Footer extends Component {

  handleChangeType = (event, type) => {
    event.preventDefault();
    this.props.changeType(type);
  }

  render () {
    const { type } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
            <strong>1</strong> left
        </span>
        <ul className="filters">
          <li><a
            className={(type === 'all' && 'selected')}
            href=""
            onClick={(event) => this.handleChangeType(event, 'all')}>All</a></li>
          <li><a
            className={(type === 'active' && 'selected')}
            href=""
            onClick={(event) => this.handleChangeType(event, 'active')}>Active</a></li>
          <li><a
            className={(type === 'completed' && 'selected')}
            href=""
            onClick={(event) => this.handleChangeType(event, 'completed')}>Completed</a></li>
        </ul>
        <button
          className="clear-completed">
          Clear completed
        </button>
      </footer>
    )
  }
}

export default Footer