import React, { Component } from 'react';

class App extends Component {
  state = {
    newTodoTitle: ''
  }

  handleChange = (event) => {
    this.setState({ newTodoTitle: event.target.value });
  }

  handleEnterKeyDown = (event) => {
    if (event.keyCode !== 13) return;
    const { newTodoTitle } = this.state;
    this.props.addTodo(newTodoTitle);
    this.setState({ newTodoTitle: '' });
  }

  render () {
    const { newTodoTitle } = this.state;
    return (
      <header>
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodoTitle}
          onKeyDown={this.handleEnterKeyDown}
          onChange={this.handleChange}
        />
      </header>
    )
  }
}

export default App;