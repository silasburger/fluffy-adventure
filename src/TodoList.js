import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';
import {Connect} from './react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoList">
        <TodoForm addTodo={this.props.addTodo}></TodoForm>
        <List todos={this.props.todos}></List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

function addTodo(todo) {
  return {type: 'addTodo', payload: {todo}};
}

export default Connect(mapStateToProps, {addTodo: addTodo})(TodoList);
