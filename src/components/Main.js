import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Main extends Component {
  render () {
    const { list, changeTodoStatus } = this.props;
    return (
      <main className="main">
        <input
          className="toggle-all"
          type="checkbox"
        />
        <ul className="todo-list">
          {
            list.map((item) => <TodoItem item={item} changeTodoStatus={changeTodoStatus} />)
          }
        </ul>
      </main>
    )
  }
}

export default Main;