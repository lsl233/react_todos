import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Main extends Component {

  renderTodoItem = (item, index) => {
    const { changeTodoStatus, removeTodo } = this.props;
    return (
      <TodoItem
        key={index.toString()}
        item={item}
        index={index}
        removeTodo={removeTodo}
        changeTodoStatus={changeTodoStatus}
      />
    )
  }

  render () {
    const { list, type } = this.props;
    return (
      <main className="main">
        <input
          className="toggle-all"
          type="checkbox"
        />
        <ul className="todo-list">
          {
            list.map((item, index) => {
              switch (type) {
                case 'active':
                  return !item.completed && this.renderTodoItem(item, index);
                case 'completed':
                  return item.completed && this.renderTodoItem(item, index);
                default:
                  return this.renderTodoItem(item, index);
              }
            })
          }
        </ul>
      </main>
    )
  }
}

export default Main;