import React, { Component } from 'react';

import store from './utils/store';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';
import 'todomvc-app-css/index.css';

const todoStore = new store('todolist');

class App extends Component {

  state = {
    list: [],
    type: 'all'
  }

  componentDidMount () {
    this.setState({ list: (todoStore.get() || []) });
  }

  addTodo = (title) => {
    const { list } = this.state;
    list.push({
      title: title,
      completed: false,
      active: true,
    });
    todoStore.add(list);
    this.setState({ list })
  }

  removeTodo = (index) => {
    const { list } = this.state;
    list.splice(index, 1);
    todoStore.add(list);
    this.setState({ list })
  }

  removeCompleted = () => {
    const { list } = this.state;
    const newList = list.filter((item) => !item.completed);
    todoStore.add(newList);
    this.setState({ list: newList });
  }

  changeTodoStatus = (type, index, status) => {
    const { list } = this.state;
    list[index][type] = status;
    todoStore.add(list);
    this.setState({ list });
  }

  changeType = (type) => {
    this.setState({ type });
  }

  filterTodo = () => {
    const { list, type } = this.state;
    switch (type) {
      case 'active':
        return list.filter((item) => !item.completed);
      case 'completed':
        return list.filter((item) => item.completed);
      default:
        return list
    }
  }

  render() {
    const { type } = this.state;
    const showList = this.filterTodo()
    return (
      <section className="App todoapp">
        <Header addTodo={this.addTodo} />
        <Main
          list={showList}
          changeTodoStatus={this.changeTodoStatus}
          removeTodo={this.removeTodo}
        />
        <Footer
          type={type}
          total={showList.length}
          removeCompleted={this.removeCompleted}
          changeType={this.changeType}
        />
      </section>
    );
  }
}

export default App;
