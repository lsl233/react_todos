import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Main extends Component {
  render () {
    const { list, changeTodoStatus, removeTodo } = this.props;
    return (
      <main className="main">
        <input
          className="toggle-all"
          type="checkbox"
        />
        <ul className="todo-list">
          {
            list.map((item, index) => {
              return (
                <TodoItem
                  key={index.toString()}
                  item={item}
                  index={index}
                  removeTodo={removeTodo}
                  changeTodoStatus={changeTodoStatus}
                />
              )
            })
          }
        </ul>
      </main>
    )
  }
}

export default Main;