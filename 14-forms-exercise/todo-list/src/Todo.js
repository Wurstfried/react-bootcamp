import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isEditing: false,
             completed: false,
             todo     : this.props.todo,
        }

        this.toggleForm   = this.toggleForm.bind  (this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleClick  = this.handleClick.bind (this)
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing })
    }
    
    handleUpdate(evt) {
        evt.preventDefault()
        this.props.updateTodo(this.props.id, this.state.todo)
        this.toggleForm()
    }

    handleChange(evt) {
        this.setState({
        [evt.target.name]: evt.target.value
        });
    }

    handleClick(evt) {
        this.setState({ completed: !this.state.completed })
    }
    
    render() {
        const completedClass = this.state.completed ? "isCompleted": ""

        if (this.state.isEditing) {
            return (
               <form onSubmit={this.handleUpdate}>
                <div>
                    <label htmlFor='todo'>Todo: </label>
                    <input
                    id       = 'todo'
                    name     = 'todo'
                    value    = {this.state.todo}
                    onChange = {this.handleChange}
                    />
                    <button>Save</button>
                </div>
                
            </form>
            )
        } else {
            return (
                <div className="Todo" onClick={this.handleClick}>
                    <span className={completedClass}>{this.props.todo}</span>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.props.removeTodo}>X</button>
                </div>
            )
        }
    }
}

export default Todo
