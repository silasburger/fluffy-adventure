import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let todos = this.props.todos.map(todo=><li>{todo}</li>)
    return (
      <ul className="List">
        {todos}
      </ul>
    );
  }
}

export default List;
