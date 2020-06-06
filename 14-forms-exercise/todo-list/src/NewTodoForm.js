import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

export class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = { todo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuid() }
        this.props.addTodo(newTodo);
        this.setState({ todo: "" });
    }
    
    handleChange(evt) {
        this.setState({
        [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='todo'>Todo: </label>
                    <input
                    id       = 'todo'
                    name     = 'todo'
                    value    = {this.state.todo}
                    onChange = {this.handleChange}
                    />
                    <button>Add Todo</button>
                </div>
                
            </form>
        )
    }
}

export default TodoForm
