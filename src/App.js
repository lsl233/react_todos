import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';

import './App.css';
import 'todomvc-app-css/index.css';

class App extends Component {
  state = {
    list: []
  }

  addTodo = (title) => {
    const { list } = this.state;
    list.push({
      title: title,
      completed: false,
      active: true,
    });
    this.setState({ list })
  }

  changeTodoStatus = (type, index, status) => {
    const { list } = this.state;
    list[index][type] = status;
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    return (
      <section className="App todoapp">
        <Header addTodo={this.addTodo} />
        <Main list={list} changeTodoStatus={this.changeTodoStatus} />
      </section>
    );
  }
}

export default App;
