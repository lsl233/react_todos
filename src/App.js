import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';
import 'todomvc-app-css/index.css';

class App extends Component {

  state = {
    list: [],
    type: 'all'
  }

  componentDidMount () {
    // this.filterList(this.state.type)
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

  removeTodo = (index) => {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({ list })
  }

  changeTodoStatus = (type, index, status) => {
    const { list } = this.state;
    list[index][type] = status;
    this.setState({ list });
  }

  changeType = (type) => {
    this.setState({ type });
  }

  filterList = (type) => {
    const { list } = this.state;
    return list.filter((item) => {
      switch (type) {
        case 'active':
          return !item.completed;
        case 'completed':
          return item.completed;
        default:
          return true;
      }
    })
  }

  render() {
    const { list, type } = this.state;
    return (
      <section className="App todoapp">
        <Header addTodo={this.addTodo} />
        <Main
          type={type}
          list={list}
          changeTodoStatus={this.changeTodoStatus}
          removeTodo={this.removeTodo}
        />
        <Footer
          type={type}
          changeType={this.changeType}
        />
      </section>
    );
  }
}

export default App;
