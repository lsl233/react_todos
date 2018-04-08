import React, { Component } from 'react';

class TodoItem extends Component {
  handleChangeTodoStatus = (event, type) => {
    const { index, changeTodoStatus } = this.props;
    changeTodoStatus(type, index, event.target.checked);
  }

  handleRemoveTodo = () => {
    const { index, removeTodo } = this.props;
    removeTodo(index);
  }

  render () {
    const { item } = this.props;
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.completed}
            onChange={(event) => this.handleChangeTodoStatus(event, 'completed')}
          />
          <label>{item.title}</label>
          <button className="destroy" onClick={this.handleRemoveTodo} />
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