import React, { Component } from 'react';

class TodoItem extends Component {
  render () {
    const { item } = this.props;
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
          />
          <label>{item.title}</label>
          <button className="destroy" />
        </div>
        <input
          ref="editField"
          className="edit"
        />
      </li>
    )
  }
}

export default TodoItem;