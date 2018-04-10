import React, { Component } from 'react';

class Footer extends Component {

  handleChangeType = (event, type) => {
    event.preventDefault();
    this.props.changeType(type);
  }

  handleRemoveCompleted = (event) => {
    event.preventDefault();
    this.props.removeCompleted();
  }

  render () {
    const { type, total } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
            <strong>{total}</strong> left
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
          onClick={this.handleRemoveCompleted}
          className="clear-completed">
          Clear completed
        </button>
      </footer>
    )
  }
}

export default Footer