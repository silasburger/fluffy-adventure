import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ''});
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit} className="TodoForm">
        <label htmlFor="todo">Todo: </label>
        <input onChange={this.handleChange} value={this.state.todo} name="todo" id="todo" type="text"/>  
        <button>Submit</button>      
      </form>
    );
  }
}

export default TodoForm;
